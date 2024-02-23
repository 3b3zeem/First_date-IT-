import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Registration.scoped.css";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Registration() {
  const [isUserRegistration, setIsUserRegistration] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleRegistrationType = () => {
    setIsUserRegistration(!isUserRegistration);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    comfirmPassword: "",
    birthdate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      ...formData,
      roleId: 0,
    };

    const url = "https://localhost:7214/User_Acounts/Create_User";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "text/plain",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        console.log("Response:", data);
        alert("Register Successfully!");
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="registration-block">
      <div className="Container-register">
        <div className="image-of-register" >
          <h2>We are Happy to <br /> <span>Have you</span> register with us!</h2>
        </div>
        <div className="contant-of-rigester">
          <h3 className="text-signup">Sign Up</h3>
          <form onSubmit={handleSubmit} style={{marginBottom: '10px'}}>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="input-feild"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="input-feild"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="input-feild"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="input-feild"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="input-feild"
            />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="input-feild"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="password-toggle-btn"
                style={{border:"none" , background : "transparent"}}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            <input
              type={showPassword ? "text" : "password"}
              name="m"
              value={formData.m}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="input-feild"
            />
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="password-toggle-btn2"
                style={{border:"none" , background : "transparent"}}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              placeholder="Birthdate"
              className="input-feild"
            />
            <button className="btn-ready3" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
