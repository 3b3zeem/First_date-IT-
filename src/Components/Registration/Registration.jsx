import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import "./Registration.scoped.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import authService from "../../Service/auth-service";

function Registration() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (
      password.length < 6 ||
      !/[A-Z]/.test(password) || // At least one uppercase letter
      !/[a-z]/.test(password) || // At least one lowercase letter
      !/\W/.test(password) // At least one non-alphanumeric character
    ) {
      setPasswordError(
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one non-alphanumeric character."
      );
      return;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }
    try {
      await authService
        .Register(firstName, lastName, userName, password, email)
        .then(
          (response) => {
            console.log("Successfully registered", response);
            navigate("/login");
            window.location.reload();
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="registration-block">
      <div className="Container-register">
        <div className="image-of-register">
          <h2>
            We are Happy to <br /> <span>Have you</span> register with us!
          </h2>
        </div>
        <div className="contant-of-rigester">
          <h3 className="text-signup">Sign Up</h3>
          <form onSubmit={handleSignUp} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="User Name"
              className="input-feild"
            />
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="input-feild"
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="input-feild"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="input-feild"
            />
            <div className="col-md-9">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="input-feild"
              />
              {showPassword ? (
                <FaEyeSlash onClick={() => setShowPassword(false)} />
              ) : (
                <FaEye onClick={() => setShowPassword(true)} />
              )}
            </div>
            <div className="col-md-9">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="input-feild"
              />
              {showConfirmPassword ? (
                <FaEyeSlash onClick={() => setShowConfirmPassword(false)} />
              ) : (
                <FaEye onClick={() => setShowConfirmPassword(true)} />
              )}
            </div>
            {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
            {confirmPasswordError && (
              <p style={{ color: "red" }}>{confirmPasswordError}</p>
            )}
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
