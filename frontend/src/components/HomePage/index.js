import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./HomePage.css";

function HomePage() {
  //   const dispatch = useDispatch();
  //   const sessionUser = useSelector((state) => state.session.user);
  //   const [errors, setErrors] = useState([]);

  return (
    <>
      <div className="homePage-main__container">
        <div className="homePage-spots__container">
          <h2>Welcome to VacayMe</h2>
        </div>
      </div>
      <div className="homePage-secondary__container">
        <div>
          <div className="secondary-spots__container">
            <h2>Explore exotic places</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
