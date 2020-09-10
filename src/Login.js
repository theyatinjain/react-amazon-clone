import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) { history.push('/') }
      })
      .catch(error => alert(error.message));
  }

  const register = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) { history.push('/') }
      })
      .catch(error => alert(error.message));
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG7.png"
          alt="Amazon"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form action="post">
          <label for="email">E-mail</label>
          <input type="text" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />

          <label for="password">Password</label>
          <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />

          <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">Create Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
