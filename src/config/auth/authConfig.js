import { baseUrl, mode, version } from "..";

const role = "admin/";
const logInEndpoint = "login";


export const adminLoginUrl = `${baseUrl}${version}${mode}${role}${logInEndpoint}`;

