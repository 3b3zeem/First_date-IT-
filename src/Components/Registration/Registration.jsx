import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Registration.scoped.css";
import axios from "axios";

function Registration() {
  const [isUserRegistration, setIsUserRegistration] = useState(true);

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
        // Handle the response as needed
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <input
        type="password"
        name="m"
        value={formData.m}
        onChange={handleChange}
        placeholder="Confirm Password"
      />
      <input
        type="date"
        name="birthdate"
        value={formData.birthdate}
        onChange={handleChange}
        placeholder="Birthdate"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Registration;
