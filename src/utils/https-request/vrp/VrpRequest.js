
import { vrpUrl } from "../../../config/vrp/vrpConfig";
import axiosInstance from "../../axios-middleware/axiosMiddleware";

export const vrpRequest = async (filters) => {
  try {
    const response = await axiosInstance.get(vrpUrl, {
      params: filters,

      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};
