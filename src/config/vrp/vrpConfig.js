import { baseUrl, version, mode,role,vrp } from "..";

const uploadImageEndPoint = "upload_file";
const sellers = "sellers";
const status = "vrp_statuses/"
const vrpProductDetailDownloadEndPoint = "download_file?request_id=";

const vrpDataDeleteEndPoint = (requestId) => `?request_id=${requestId}`;

export const vrpUrl = `${baseUrl}${version}${mode}${role}${vrp}`;
export const uploadImageUrl = `${baseUrl}${version}${mode}${role}${uploadImageEndPoint}`;

export const VrpTableDataDeleteUrl = (requestId) =>
  `${baseUrl}${version}${mode}${role}${vrpDataDeleteEndPoint(requestId)}`;

export const vrpRejectUrl = (requestId, remarks) =>
  `${baseUrl}${version}${mode}${role}vrp?request_id=${requestId}&status=2&remarks=${remarks}`;

export const vrpApprovalUrl = (requestId) =>
  `${baseUrl}${version}${mode}${role}vrp?request_id=${requestId}&status=1`;

export const sellerListUrl = `${baseUrl}${version}${mode}${role}${sellers}`;

export const sellerStatusUrl = `${baseUrl}${version}${mode}${role}${status}`;

export const vrpProductDetailDownloadUrl = (requestId) =>
  `${baseUrl}${version}${mode}${role}${vrpProductDetailDownloadEndPoint}${requestId}`;
