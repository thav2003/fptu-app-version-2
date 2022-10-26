import axiosClient from "@utils/api/axiosClient";
const axiosApi = {
  getAll: async () => {
    const url = "api/v1/confession/analyze";
    const res = await axiosClient.get(url);
    return res.data;
  },
};
export default axiosApi;
