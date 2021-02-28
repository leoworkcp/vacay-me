import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

import "./HomePage.css";
import { NavLink, Redirect } from "react-router-dom";
function HomePage() {
  return (
    <>
      <div className="homePage-main__container">
        <div className="header-black1__container">
          <div className="places-link__container">
            <NavLink to="/spots">
              <h2>Places to stay</h2>
            </NavLink>
            <NavLink to="/reviews">
              <h2>Experiences</h2>
            </NavLink>
          </div>
          <div className="homePage-spots__container">
            <h2>Welcome to VacayMe</h2>
            <h2>Welcome </h2>
            <h2>to</h2>
            <h2>Vacay</h2>
            <h2>Me</h2>
          </div>
        </div>
        <div className="homePage-spots__container">
          {/* <h2>Welcome to VacayMe</h2>
          <h2>Welcome </h2>
          <h2>to</h2>
          <h2>Vacay</h2>
          <h2>Me</h2> */}
        </div>
      </div>
      <div className="header-black__container">
        <div className="secondary-link__container">
          <h2>Places to stay</h2>
        </div>
      </div>

      <div className="homePage-secondary__container">
        <div>
          <div className="secondary-spots__container">
            <NavLink to="/spots">
              <h2>Explore exotic places</h2>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="footer-black__container">
        <div className="footer-link__container">
          <a id="github" href="https://github.com/leoworkcp">
            github
          </a>
        </div>
      </div>
    </>
  );
}

export default HomePage;
