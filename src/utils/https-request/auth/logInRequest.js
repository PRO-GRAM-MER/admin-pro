

import { adminLoginUrl } from "../../../config/auth/authConfig";
import axiosInstance from "../../axios-middleware/axiosMiddleware";
import Cookies from "js-cookie";

export const logOut = () => {
  Cookies.remove("authToken");
  Cookies.remove("expiryTimestamp");
};


const handleTokenExpiration = (expiryTimestamp) => {
  if (expiryTimestamp) {
    const currentTime = Date.now() / 1000; // Convert to seconds
    if (currentTime > expiryTimestamp) {
      // Token has expired
      console.log("Token has expired. Logging out...");
      logOut();
    }
  }
};


export const logInRequest = async (data) => {
  try {
    const response = await axiosInstance.post(
      adminLoginUrl,
      {...data},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const authToken = response.data.data.auth_token;
    const expiryTimestamp = response.data.data.expiry_timestamp;
    console.log(authToken);
    Cookies.set("authToken", authToken);
    Cookies.set("expiryTimestamp", expiryTimestamp);

    console.log("Cookie set:", {
      authToken: Cookies.get("authToken"),
    });
    handleTokenExpiration(expiryTimestamp);

    return response.data;
  } catch (error) {
    throw error;
  }
};
