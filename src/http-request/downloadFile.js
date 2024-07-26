import axiosInstance from "../axios/axiosTokenMiddleware";
import { baseUrl, version, mode, role } from "../config/config";

const URL = `${baseUrl}${version}${mode}${role}`;

export const downloadFile = async (url) => {
  try {
    const response = await axiosInstance.get(url, {
      responseType: "arraybuffer",
    });

    console.log("Downloaded file data:", response);

    return response.data;
  } catch (error) {
    console.error("Error downloading the file:", error);
    throw error; 
  }
};

export const downloadRequest = async ({ category, requestId }) => {
  try {
    const downloadUrl = `${URL}/${category}/download_file?request_id=${requestId}`;
    console.log("URL:", downloadUrl);
    const fileData = await downloadFile(downloadUrl);

    console.log("Downloaded file data:", fileData);

    return fileData;
  } catch (error) {
    console.error("Error during download request:", error);
    throw error;
  }
};
