import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        return result.json(); // Parse response as JSON
      })
      .then((resp) => {
        console.warn(resp);
        alert("Login Successfully!")
        Navigate("/"); // Navigate to the home page
      })
      .catch((error) => {
        console.error("There was a problem with your login:", error);
        alert("Email Or Password Not Correct!")
      });
  }

  return (
    <section className="py-3 py-md-5 py-xl-8" style={{height: '89.3vh'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 ">
            <div className="mb-5">
              <h4 className="text-center mb-4">Log In</h4>
            </div>
            <div className="card border border-light-subtle rounded-4">
              <div className="card-body p-3 p-md-4 p-xl-5" style={{height: '350px'}}>
                <div>
                  <div className="row gy-3 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          required
                        />
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="col-12 mt-3">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          required
                        />
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          onClick={() => handleLogin()}
                          className="btn btn-primary btn-lg mt-5"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-4">
              <p className="m-0 text-secondary text-center">
                Don't have an account?
                <Link
                  to="/registration"
                  className="link-primary text-decoration-none"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;