
import { vrpApprovalUrl } from "../../../config/vrp/vrpConfig";
import axiosInstance from "../../axios-middleware/axiosMiddleware";

export const vrpApprovalRequest = async (data) => {
  const requestId = data.requestId;
  try {
    const response = await axiosInstance.patch(
      vrpApprovalUrl(requestId),
      null,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

const handleRequestError = (error) => {
  if (axiosInstance.isAxiosError(error)) {
    throw new Error("Server error");
  } else {
    throw error;
  }
};
