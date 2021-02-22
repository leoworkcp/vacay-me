// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";
function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const demoUser = () => {
    const email = "demouser@gmail.com";
    const userPw = "Demouser123!@#";
    setPassword(userPw);
    setCredential(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <>
      <div className="login-main__container">
        <div className="login-form__container">
          <form onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <label>
              Username or Email
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit" className="submit-login__btn">
              Log In
            </button>
            <button
              type="submit"
              className="demo-login__btn"
              onClick={() => demoUser()}
            >
              Demo-User
            </button>
            <button
              type="submit"
              className="demo-login__btn"
              onClick={() => demoUser()}
            >
              Demo-Host
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
