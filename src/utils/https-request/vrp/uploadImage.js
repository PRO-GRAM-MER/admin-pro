import { uploadImageUrl } from "../../../config/config";
import axiosInstance from "../../axios-middleware/axiosMiddleware";

export const uploadImageRequest = async (file) => {
  const formData = new FormData();
  formData.append("uploaded_file", file);
  try {
    const response = await axiosInstance.post(uploadImageUrl, formData);

    console.log("Upload successful:", uploadImageUrl);

    return response; // Return the specific data you need from the response
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Server error");
  }
};
