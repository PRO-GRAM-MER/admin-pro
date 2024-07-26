import { createColumnHelper } from "@tanstack/react-table";
const columnHelper = createColumnHelper();

export const columnsConfig = {
  vrp: (handleOpenModal, handleDownload) => [
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
            onClick={() => handleOpenModal(props.row.original)}
          >
            {props.row.original.approval_status === "approved"
              ? "Approved"
              : props.row.original.approval_status === "pending"
              ? "Pending"
              : "Rejected"}
          </button>
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
            onClick={() => handleDownload(props.row.original)}
          >
            Download
          </button>
        </div>
      ),
    }),
  ],
  spares: (handleOpenModal, handleDownload) => [
    columnHelper.accessor("request_id", {
      header: "Request Id",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor("seller_name", {
      header: "Seller Name",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor("quantity", {
      header: "Quantity",
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
            onClick={() => handleOpenModal(props.row.original)}
          >
            {props.row.original.approval_status === "approved"
              ? "Approved"
              : props.row.original.approval_status === "pending"
              ? "Pending"
              : "Rejected"}
          </button>
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
            onClick={() => handleDownload(props.row.original)}
          >
            Download
          </button>
        </div>
      ),
    }),
  ],
  new_phones: (handleOpenModal, handleDownload) => [
    columnHelper.accessor("request_id", {
      header: "Request Id",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor("seller_name", {
      header: "Seller Name",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor("quantity", {
      header: "Quantity",
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
            onClick={() => handleOpenModal(props.row.original)}
          >
            {props.row.original.approval_status === "approved"
              ? "Approved"
              : props.row.original.approval_status === "pending"
              ? "Pending"
              : "Rejected"}
          </button>
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
            onClick={() => handleDownload(props.row.original)}
          >
            Download
          </button>
        </div>
      ),
    }),
  ],
};
