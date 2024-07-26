import React, { useCallback, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Table } from "../../component/table/Table";
import { useDispatch } from "react-redux";
import { onOpen } from "../../store/actionModalSlice";
import { columnsConfig } from "./columnsDef";
import { downloadRequest } from "../../http-request/downloadFile";
import { toast } from "react-toastify";

export const TablePage = ({ data }) => {
  const { category } = useParams();
  const [columnDefs, setColumnDefs] = useState([]);

  const dispatch = useDispatch();

  const handleDownload = useCallback(
    async (rowData) => {
      try {
        toast.success("downloading...");
        const fileData = await downloadRequest({
          category,
          requestId: rowData.request_id,
        });
        console.log(category);
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
      } catch (err) {
        console.error("Error occurred during download:", err);
        toast.success("error while downloading");
      }
    },
    [category]
  );

  const handleOpenModal = useCallback(
    (rowData) => {
      dispatch(
        onOpen({
          category,
          request_id: rowData.request_id,
          approval_status: rowData.approval_status,
          remarks: rowData.remarks,
        })
      );
    },
    [category, dispatch]
  );

  useEffect(() => {
    if (columnsConfig[category]) {
      setColumnDefs(columnsConfig[category](handleOpenModal, handleDownload));
    }
  }, [category, data.length, handleDownload, handleOpenModal]);

  return <Table data={data} columns={columnDefs} />;
};
