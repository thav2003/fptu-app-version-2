import axiosClient from "@utils/api/axiosClient";
const axiosApi = {
  accept: async payload => {
    const url = "api/v1/confession/accept";
    const res = await axiosClient.put(url, payload);
    return res.data;
  },
  reject: async payload => {
    const url = "api/v1/confession/reject";
    const response = await axiosClient.put(url, payload);
    return response.data;
  },
  getPending: async () => {
    const url = "api/v1/confession/getpending";
    const response = await axiosClient.get(url);
    return response.data;
  },
};
export default axiosApi;
