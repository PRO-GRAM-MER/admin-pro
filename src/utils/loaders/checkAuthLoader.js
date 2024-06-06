import Cookies from "js-cookie";
import { redirect } from "react-router-dom";

export function checkAuthLoader() {
  const token = Cookies.get("token");
  const expirationTime = Cookies.get("expirationTime");

  if (!token && !expirationTime) {
    return redirect("/");
  }
  return null;
}
