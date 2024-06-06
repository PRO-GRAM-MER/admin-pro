import axios from 'axios';
import Cookies from 'js-cookie';

const attachTokenMiddleware = (config) => {
  const authToken = Cookies.get('authToken');

  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }

  return config;
};

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(attachTokenMiddleware);

export default axiosInstance;
