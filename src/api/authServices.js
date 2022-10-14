import axiosInstance from "./axios";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const login = (email, password) => {
 return axiosInstance
    .post("auth/login/", {
      email: email,
      password: password,
    })
    .then((response) => {
      const {setIsLoggedIn} = useContext(UserContext);
      if (response.data.access) {
        localStorage.setItem("user", JSON.stringify(response.data));
        setIsLoggedIn(true);
        return true;
      }
      // return response.data;
    })
    .catch((error) => {
      return false;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const search = (params) => {
  params.replace(/\s/g, "");
  return axiosInstance
    .get(`alumni/?search=${params}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return false;
    });
};

export { login, logout, getCurrentUser, search };
