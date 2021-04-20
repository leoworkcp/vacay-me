import React, { useState } from "react";
import { useSelector } from "react-redux";

import SearchBar from "../SearchBar";
import "./HomePage.css";
import { NavLink, Redirect } from "react-router-dom";
function HomePage() {
  let rN = Math.floor(Math.random() * 10) + 1;

  const oneSpot = useSelector((state) => {
    return state?.spots?.payload?.map((eachSpotId) => state?.spots[eachSpotId]);
  });
  let lat;
  let lon;
  window.navigator.geolocation.getCurrentPosition(function (pos) {
    // console.log(pos);
    lat = pos.coords.latitude;
    lon = pos.coords.longitude;
  });

  // console.log(lat);
  // console.log(lon);

  // console.log(oneSpot);

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
            <SearchBar />
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
        <div className="explore-exotic__places">
          <div className="secondary-spots__container">
            <NavLink to="/spots">
              <h2>Explore exotic places!</h2>
            </NavLink>
          </div>
        </div>

        <div className="-explore-nearby__container">
          <div className="h3-text__container">
            <h3></h3>
          </div>
          <div className="every-nearby__container">
            <div className="each-nearby__container">
              <div className="each-nearby__links">
                <NavLink
                  className="picsExplore-anchor_links"
                  to={`/spots/${oneSpot[0]?.id}`}
                >
                  <img
                    id="explore-nearby__img"
                    src={oneSpot[0]?.imageUrl}
                    alt="avatar"
                  />
                  <p>${oneSpot[0]?.price}</p>
                </NavLink>
              </div>
            </div>
            <div className="each-nearby__container">
              <div className="each-nearby__links">
                <NavLink
                  className="picsExplore-anchor_links"
                  to={`/spots/${oneSpot[5]?.id}`}
                >
                  <img
                    id="explore-nearby__img"
                    src={oneSpot[5]?.imageUrl}
                    alt="avatar"
                  />
                  <p>${oneSpot[5]?.price}</p>
                </NavLink>
              </div>
            </div>
            <div className="each-nearby__container">
              <div className="each-nearby__links">
                <NavLink
                  className="picsExplore-anchor_links"
                  to={`/spots/${oneSpot[4]?.id}`}
                >
                  <img
                    id="explore-nearby__img"
                    src={oneSpot[4]?.imageUrl}
                    alt="avatar"
                  />
                  <p>${oneSpot[4]?.price}</p>
                </NavLink>
              </div>
            </div>
            <div className="each-nearby__container">
              <div className="each-nearby__links">
                <NavLink
                  className="picsExplore-anchor_links"
                  to={`/spots/${oneSpot[2]?.id}`}
                >
                  <img
                    id="explore-nearby__img"
                    src={oneSpot[2]?.imageUrl}
                    alt="avatar"
                  />
                  <p>${oneSpot[2]?.price}</p>
                </NavLink>
              </div>
            </div>
            <div className="each-nearby__container">
              <div className="each-nearby__links">
                <NavLink
                  className="picsExplore-anchor_links"
                  to={`/spots/${oneSpot[3]?.id}`}
                >
                  <img
                    id="explore-nearby__img"
                    src={oneSpot[3]?.imageUrl}
                    alt="avatar"
                  />
                  <p>${oneSpot[3]?.price}</p>
                </NavLink>
              </div>
            </div>
            <div className="each-nearby__container">
              <div className="each-nearby__links">
                <NavLink
                  className="picsExplore-anchor_links"
                  to={`/spots/${oneSpot[9]?.id}`}
                >
                  <img
                    id="explore-nearby__img"
                    src={oneSpot[9]?.imageUrl}
                    alt="avatar"
                  />
                  <p>${oneSpot[9]?.price}</p>
                </NavLink>
              </div>
            </div>
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
