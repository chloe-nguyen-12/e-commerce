import axiosClient from "./axiosClient";
export const usersApi = {
  login: (data) => {
    return axiosClient.post("/api/users/login", data);
  },
  register: (data) => {
    return axiosClient.post("/api/users", data);
  },
  getProfile: (id) => {
    return axiosClient.get(`/api/users/${id}`);
  },
  updateProfile: (user) => {
    return axiosClient.put("api/users/profile", user);
  },
  listUsers: () => {
    return axiosClient.get("/api/users");
  },
};
