import React, { useState } from "react";
import { Link , useHistory} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";
import app from "./firebase";



function Login() {
  const auth = getAuth(app);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const signIn = (e) => {
    e.preventDefault();
    //   firebase stuff

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    if(auth){
        history.push('/')
    }

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("sorry ya wahala de : " + errorCode)
  });
  };

  const register = (e) => {
    e.preventDefault();
 
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("successfully created an acccount")

      if(auth){
          history.push('/')
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;



      alert(errorCode)
      // ..
    });
  }
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
          <input
            type="email"
            placeholder="Enter your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>

          <p>
            By signing in you agree to the Evas themes and conditions of sales.
            Please asee our privacy Notice and our Interest Base .
          </p>
          <button
            className="login__registerButton"
            onClick={register}
            type="submit"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
