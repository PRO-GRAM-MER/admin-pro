
import { vrpRejectUrl } from "../../../config/vrp/vrpConfig";
import axiosInstance from "../../axios-middleware/axiosMiddleware";

export const vrpRejectRequest = async (data) => {
  console.log(data)
  const requestId = data.requestId;
  const remarks = data.remarks;
  try {
    const response = await axiosInstance.patch(
      vrpRejectUrl(requestId, remarks),
      null,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(requestId, remarks);
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
