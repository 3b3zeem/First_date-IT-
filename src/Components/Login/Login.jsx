import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();

  function handleLogin() {
    let items = { email, password };
    console.warn(items);
    fetch("https://localhost:7214/User_Acounts/Login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(items)
    })
      .then((result) => {
        if (!result.ok) {
          throw new Error("Network response was not ok");
        }
        return result.json();
      })
      .then((resp) => {
        console.warn(resp);
        alert("Login Successfully!")
        Navigate("/");
      })
      .catch((error) => {
        console.error("There was a problem with your login:", error);
        alert("Email Or Password Not Correct!")
      });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="Login-block">
      <div className="Container-Login">
        <div className="image-of-Login" >
        </div>
        <div className="contant-of-Login">
          <h3 className="text-Login">Login</h3>
          <form className="coll1" onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="input-feild2"
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input-feild2"
            />
            <button
              type="button"
              style={{ border: "none" }}
              className="btnHiddenPass"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

            <input type="submit" className="btn-ready4" value="Log In" />
          </form>
          <div className="link2">
            <p>
              Don't have an account?
              <br />
              <Link to="/registration">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
