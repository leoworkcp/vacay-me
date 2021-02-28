import React, { useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import "./SearchBar.css";

function SearchBar() {
  return (
    <>
      <div className="searchBar-main__container">
        <div className="searchBar-input__container">
          <div className="searchBar-location__title">
            <p id="location-filter__by">Location</p>
          </div>
          <input
            id="location-input__search"
            label="Location"
            placeholder="Where are you going?"
          ></input>
        </div>
        <div className="searchNav-main-btn">
          <div className="searchNav-btn__search">
            <NavLink to={`/spots/`}>
              <button id="search-nav__btn">
                <span>{`Search`}</span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
