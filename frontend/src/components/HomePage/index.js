import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

import "./HomePage.css";
import { NavLink } from "react-router-dom";
function HomePage() {
  return (
    <>
      <div className="homePage-main__container">
        <div className="homePage-spots__container">
          <h2>Welcome to VacayMe</h2>
          <h2>Welcome </h2>
          <h2>to</h2>
          <h2>Vacay</h2>
          <h2>Me</h2>
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
    </>
  );
}

export default HomePage;
