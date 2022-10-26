import axiosClient from "@utils/api/axiosClient";
const axiosApi = {
  // đăng nhập
  signIn: async payload => {
    const url = "/api/v1/users/login";
    const res = await axiosClient.post(url, payload);
    return res.data;
  },
  //đăng kí
  signUp: () => {},
  getMe: async payload => {
    const url = "/api/v1/users/me";
    const response = await axiosClient.get(url, payload);
    return response.data;
  },
};
export default axiosApi;
