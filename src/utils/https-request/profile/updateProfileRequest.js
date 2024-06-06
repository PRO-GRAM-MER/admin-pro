import { updateProfileDataUrl } from "../../../config/config";
import axiosInstance from "../../axios-middleware/axiosMiddleware";

export const updateProfileDataRequest = async (updatedProfile) => {
  try {
    const response = await axiosInstance.post(
      updateProfileDataUrl,
      updatedProfile,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response; // Return the specific data you need from the response
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Server error");
  }
};
