// frontend/src/components/SignupFormHost/index.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// import * as sessionActions from "../../store/session";
import { createUser } from "../../store/session";

import "./SignupForm.css";

function SignupFormHost() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);

  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(createUser({ email, username, password, image })).catch(
        async (res) => {
          const data = await res.json();
          setUsername("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setImage(null);
          if (data && data.errors) setErrors(data.errors);
        }
      );
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  // for multiple file upload
  //   const updateFiles = (e) => {
  //     const files = e.target.files;
  //     setImages(files);
  //   };

  return (
    <>
      <div className="body-main__container">
        <div className="title-main__container">
          <h2>Finish signing up</h2>
        </div>
        <div className="signup-form__container">
          <form onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <label>
              Email
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Username
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <label>
              Confirm Password
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
            <label>
              <input type="file" onChange={updateFile} />
            </label>
            {/* <label>
            Multiple Upload
            <input 
              type="file"
              multiple
              onChange={updateFiles} />
          </label> */}
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupFormHost;
