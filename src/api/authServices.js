import axiosInstance from "./axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const signup = (data,image) => {
  let formData = new FormData();
  //Form payload
  formData.append("first_name", data.first_name);
  formData.append("last_name", data.last_name);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("cid_Number", data.cid_Number);
  formData.append("graduation_year", data.graduation_year);
  formData.append("job_profile", data.job_profile);
  formData.append("company", data.company);
  formData.append("profile_image", image.image[0]);
  //
  return axios
    .post("http://localhost:8000/api/alumni/register/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      const navigate = useNavigate();
      navigate("/");
    })
    .catch((error) => {
      return error;
    });
};

const login = (email, password) => {
  return axiosInstance
    .post("auth/login/", {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.data.access) {
        localStorage.setItem("user", JSON.stringify(response.data));
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

export { login, logout, getCurrentUser, search, signup };
