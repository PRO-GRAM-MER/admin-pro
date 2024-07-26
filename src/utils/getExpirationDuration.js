import Cookies from "js-cookie";

export const getExpirationDuration = () => {
  const storedExpirationTimeInSeconds = Number(Cookies.get("expirationTime"));
  console.log("Stored Expiration Time (Seconds):", storedExpirationTimeInSeconds);

  // Convert storedExpirationTimeInSeconds to milliseconds
  const storedExpirationTimeInMillis = storedExpirationTimeInSeconds * 1000;

  const expirationTime = new Date(storedExpirationTimeInMillis);
  console.log("Parsed Expiration Time:", expirationTime);

  const now = new Date();
  console.log("Current Time:", now);

  const duration = expirationTime.getTime() - now.getTime();
  console.log("Duration:", duration);

  return duration;
};
export const getAuthToken = () => {
  const token = Cookies.get("token");
  const tokenDuration = getExpirationDuration();
  if (tokenDuration < 0) {
    return "EXPIRED";
  }
  return token;
};