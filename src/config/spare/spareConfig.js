import { baseUrl, version, mode, role, spares } from "..";

export const spareUrl = `${baseUrl}${version}${mode}${role}${spares}`;
const spareProductDetailDownloadEndPoint = "download_file?request_id=";

export const spareProductDetailDownloadUrl = (requestId) =>
  `${baseUrl}${version}${mode}${role}${spares}${spareProductDetailDownloadEndPoint}${requestId}`;
