import axiosClient from "@utils/api/axiosClient";

const axiosApi = {
  getApproved: async () => {
    const url = "api/v1/confession/approved";
    const res = await axiosClient.get(url);
    return res.data;
  },
  delete: async id => {
    const url = `api/v1/tool/cancel/${id}`;
    const res = await axiosClient.delete(url);
    return res.data;
  },
};
export default axiosApi;
