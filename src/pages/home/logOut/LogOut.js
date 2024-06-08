import Cookies from "js-cookie";
import { redirect } from "react-router-dom";

export function action() {
  Cookies.remove("token");
  Cookies.remove("expirationTime");
  return redirect("/")
}
