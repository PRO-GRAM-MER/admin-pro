import Cookies from "js-cookie";

export const getAuthToken = () => {
  console.log(Cookies.get("authToken"));
  const authToken = Cookies.get("authToken");
  return authToken;
};
