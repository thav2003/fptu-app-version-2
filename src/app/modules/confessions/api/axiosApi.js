import axiosClient from "@utils/api/axiosClient";
const axiosApi = {
  // đăng nhập
  send: async payload => {
    const url = "/api/v1/confession";
    const res = await axiosClient.post(url, payload);
    return res.data;
  },
};
export default axiosApi;
