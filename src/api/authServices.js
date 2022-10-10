import axiosInstance from "./axios";

const login = (email, password) => {
  return axiosInstance
    .post("auth/login/", {
      "email":email,
      "password":password,
    })
    .then((response) => {
      if (response.data.access) {
        localStorage.setItem("user", JSON.stringify(response.data));
        return true;
      }
      // return response.data;
    }).catch((error) => {
      return false;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export { login, logout, getCurrentUser };