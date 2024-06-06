import { VrpTableDataDeleteUrl } from "../../../config/config";
import axiosInstance from "../../axios-middleware/axiosMiddleware";

export const vrpTableDataDeleteRequest = async (requestId) => {
  try {
    const response = await axiosInstance.delete(
      VrpTableDataDeleteUrl(requestId)
    );

    return response;
  } catch (error) {
    if (axiosInstance.isAxiosError(error)) {
      // Axios error (e.g., network error, 404 Not Found)
      // console.error("Axios error:", error.message);
      throw new Error("Server error");
    } else {
      // Non-Axios error
      // console.error("Non-Axios error:", error.message);
      throw error; // Re-throw the original error
    }
  }
};
