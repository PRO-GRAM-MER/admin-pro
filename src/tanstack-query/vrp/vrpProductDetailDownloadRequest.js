
import { vrpProductDetailDownloadUrl } from "../../config/config";
import axiosInstance from "../../utils/axios-middleware/axiosMiddleware";


export const downloadFile = async (url) => {
  try {
    const response = await axiosInstance.get(url, {
      responseType: "arraybuffer",
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const vrpProductDetailDownloadRequest = async ({ requestId }) => {
  try {
    const downloadUrl = vrpProductDetailDownloadUrl(requestId);
    const fileData = await downloadFile(downloadUrl);

    // Log the downloaded file data
    console.log("Downloaded file data:", fileData);

    return fileData;
  } catch (error) {
    if (axiosInstance.isAxiosError(error)) {
      // Axios error (e.g., network error, 404 Not Found)
      throw new Error("Server error");
    } else {
      // Non-Axios error
      throw error; // Re-throw the original error
    }
  }
};
