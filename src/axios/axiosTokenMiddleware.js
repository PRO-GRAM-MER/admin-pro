// utils/axiosInstance.js
import axios from 'axios';
import Cookies from 'js-cookie';

const attachTokenMiddleware = (config) => {
  const authToken = Cookies.get('token'); // Get the token from cookies

  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`; // Attach the token
  }

  return config;
};

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(attachTokenMiddleware);

export default axiosInstance;
