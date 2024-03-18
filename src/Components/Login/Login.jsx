import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../Service/auth-service";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.Login(email, password).then(
        () => {
          navigate("/");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* <form onSubmit={handleLogin}>
        <h3>Login</h3>
        <input
          type="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log in</button>
      </form> */}

      <form onSubmit={handleLogin} className="ms-5 mt-5">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label> <br />
            <input
              type="email"
              classN="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-5">
          Sign in
        </button>
        <p>U don't hve an account! <Link to={"/registration"}>Sign Up</Link></p>
      </form>
    </div>
  );
};

export default Login;
