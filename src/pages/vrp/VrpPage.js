import React, { useEffect, useState } from "react";
import useGetVrp from "../../tanstack-query/vrp/useGetVrp";
import { BasicTable } from "../../components/table/BasicTable";
import { createColumnHelper } from "@tanstack/react-table";
import { motion, AnimatePresence } from "framer-motion";

import classes from "./vrpPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showToastWithTimeout } from "../../store/toaster/toasterActions";
import { Modal } from "../../components/ui/modal/Modal";
import { vrpRejectRequest } from "../../utils/https-request/vrp/vrpRejectRequest";

import { vrpApprovalRequest } from "../../utils/https-request/vrp/vrpApprovalRequest";
import { vrpDownloadRequest } from "../../utils/https-request/vrp/vrpDownloadRequest";
import { SellerListPage } from "./SellerListPage";
import { SellerStatusPage } from "./SellerStatusPage";
import { useSearchParams } from "react-router-dom";
import { selectVrpList, useGetVrpListQuery } from "../../services/vrpListSlice";
import { setFilters } from "../../store/slices/vrp/vrpFilterSlice";
import { VrpPageSkeleton } from "../../components/skeleton/vrpPageSkeleton/VrpPageSkeleton";

export const VrpPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const [sellerId, setSellerId] = useState("0");
  const [sellerStatus, setSellerStatus] = useState("0");
  const { seller_id, status } = useSelector((state) => state.vrpFilter);

  const dispatch = useDispatch();

  const { data, isSuccess } = useGetVrpListQuery({
    seller_id,
    status,
  });

  const tableData = useSelector(selectVrpList);

  const onSellerFilter = (sellerId) => {
    setSellerId(sellerId);
    console.log(sellerId);
  };
  const onStatusFilter = (status) => {
    setSellerStatus(status);
    console.log(status);
  };

  useEffect(() => {
    const sellerIdFromUrl = searchParams.get("seller_id");
    const statusFromUrl = searchParams.get("status");
    setSellerId(sellerIdFromUrl);
    setSellerStatus(statusFromUrl);

    dispatch(
      setFilters({
        seller_id: sellerIdFromUrl || "0",
        status: statusFromUrl || "0",
      })
    );
  }, [dispatch, searchParams]);

  const handleApplied = () => {
    setSearchParams({ seller_id: sellerId, status: sellerStatus });
    dispatch(setFilters({ seller_id: sellerId, status: sellerStatus }));
    console.log(searchParams.get("seller_id"));
  };

  const onDownload = async (rowData) => {
    dispatch(showToastWithTimeout("Downloading...", "#00A167"));

    try {
      const fileData = await vrpDownloadRequest({
        requestId: rowData.request_id,
      });
      const contentType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      const blob = new Blob([fileData], { type: contentType });

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `mobiGarage_${rowData.request_id}.xlsx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error occurred during download:", error);
      dispatch(
        showToastWithTimeout(
          error.response.data.message.displayMessage,
          "#D32F2F"
        )
      );
    }
  };

  const openModal = (rowData) => {
    setSelectedRow(rowData);
    setShowConfirmation(rowData.request_id);
    console.log(rowData);
    dispatch(showToastWithTimeout("Take Action", "#00A167"));
  };

  const closeModal = () => {
    setShowConfirmation(null);
  };

  const onReject = async (requestId, remarks) => {
    // await rejectMutation.mutate({ requestId: requestId, remarks: remarks });
    // closeModal();
    // dispatch(showToastWithTimeout("Request Rejected"));
  };

  const onApproval = async () => {
    // await approvalMutation.mutate({ requestId: showConfirmation });
    // closeModal();
    // dispatch(showToastWithTimeout("Request Approved"));
  };

  const columnHelper = createColumnHelper();

  // Define your columns using the column helper
  const columns = [
    columnHelper.accessor("lot_id", {
      header: "Lot Id",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor("request_id", {
      header: "Request Id",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor("seller_name", {
      header: "Seller",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    }),

    columnHelper.accessor("original_price", {
      header: "Original Price",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    }),

    columnHelper.accessor("rate_card", {
      header: "Rate Card",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    }),

    columnHelper.display({
      id: "actions",
      header: <div style={{ textAlign: "center" }}>Action</div>,
      cell: (props) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => openModal(props.row.original)}
            style={{
              width: "76px",
              color: "#FFFFFF",
              fontSize: "12px",
              lineHeight: "12px",
              fontWeight: 500,
              fontFamily: "Poppins, sans",
              backgroundColor:
                props.row.original.approval_status === "approved"
                  ? "#00A167"
                  : props.row.original.approval_status === "pending"
                  ? "#FF6F3F"
                  : "#FF0000",
              borderRadius: "4px",
              padding: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {props.row.original.approval_status === "approved"
              ? "Approved"
              : props.row.original.approval_status === "pending"
              ? "Pending"
              : "Rejected"}
          </button>
          <AnimatePresence>
            {showConfirmation === props.row.original.request_id && (
              <motion.div
                onClick={closeModal}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Modal
                  data={selectedRow}
                  onReject={(requestId, remarks) => {
                    onReject(requestId, remarks);
                  }}
                  onApproval={onApproval}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ),
    }),

    columnHelper.display({
      id: "download",
      header: <div style={{ textAlign: "center" }}>Download</div>,
      cell: (props) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            disabled={
              props.row.original.approval_status === "pending for status"
            }
            onClick={() => onDownload(props.row.original)}
            style={{
              width: "76px",
              color: "#FFFFFF",
              backgroundColor: "#46CD80",
              fontSize: "12px",
              lineHeight: "12px",
              fontWeight: 500,
              fontFamily: "Poppins, sans",
              borderRadius: "4px",
              padding: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Download
          </button>
          <AnimatePresence>
            {showConfirmation === props.row.original.request_id && (
              <motion.div
                onClick={closeModal}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Modal
                  data={selectedRow}
                  onReject={(requestId, remarks) => {
                    onReject(requestId, remarks);
                  }}
                  onApproval={onApproval}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ),
    }),
  ];

  return isSuccess ? (
    <div className={classes.box}>
      <div className={classes.status}>
        <SellerListPage onFilter={(sellerId) => onSellerFilter(sellerId)} />
        <SellerStatusPage onFilter={(status) => onStatusFilter(status)} />
        <button className={classes.status__apply} onClick={handleApplied}>
          Apply
        </button>
      </div>

      <BasicTable data={tableData} columns={columns} />
    </div>
  ) : (
    <VrpPageSkeleton />
  );
};
