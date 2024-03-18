import axios from "axios";

const Register = (firstName, lastName, userName, password, email) => {
  return axios
    .post(
      "https://localhost:7120/api/User/register",
      {
        userName,
        firstName,
        lastName,
        password,
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("User", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const Login = (email, password) => {
  return axios
    .post(
      "https://localhost:7120/api/User/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("User", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const Logout = () => {
  localStorage.removeItem("User");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("User"));
};

const authService = {
  Register,
  Login,
  Logout,
  getCurrentUser,
};

export default authService;
