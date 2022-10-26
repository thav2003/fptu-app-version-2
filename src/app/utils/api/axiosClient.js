/* eslint-disable no-undef */
import axios from "axios";
import LocalStorageUtils, {
  LOCAL_STORAGE_KEY,
} from "@utils/browser/LocalStorage";
const axiosClient = axios.create({
  baseURL: process.env.API_BASE_URL + ":3000",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async config => {
  const customHeader = {};
  const accessToken = LocalStorageUtils.getItem(LOCAL_STORAGE_KEY.JWT);
  if (accessToken) {
    customHeader.Authorization = `Bearer ${accessToken}`;
  }
  return {
    ...config,
    headers: {
      ...customHeader,
      ...config.headers,
    },
  };
});
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.toJSON());
  }
);
export default axiosClient;
