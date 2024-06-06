import axios from "axios";
import { uploadImageUrl } from "../../../config/config";
import axiosInstance from "../../axios-middleware/axiosMiddleware";

export const uploadImageRequest = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const response = await axios.post(uploadImageUrl, formData);

    console.log("Upload successful:", file);

    return response; // Return the specific data you need from the response
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Server error");
  }
};
