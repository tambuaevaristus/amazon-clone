import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt=""
        />
      </Link>
      <div className="login__container">
          <h1>Sign In</h1>

          <form>
              <h5>Email</h5>
              <input type="text"/>

              <h5>Password</h5>
              <input type="password"/>

              <button className="login__signInButton">Sign In</button>

              <p>
                  By signing in you agree to the Evas
                   themes and conditions of sales. Please 
                   asee our  privacy Notice and our Interest Base .
              </p>
              <button className="login__registerButton">Create Account</button>
          </form>
      </div>
    </div>
  );
}

export default Login;
