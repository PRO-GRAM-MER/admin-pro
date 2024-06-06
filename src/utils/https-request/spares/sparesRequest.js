
import { spareUrl } from "../../../config/spare/spareConfig";
import axiosInstance from "../../axios-middleware/axiosMiddleware";

export const sparesRequest = async (filters) => {
  try {
    const response = await axiosInstance.get(spareUrl, {
      params: filters,

      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data)

    return response;
  } catch (error) {
    throw error;
  }
};
