import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./SearchBar.css";

function SearchBar() {
  const oneSpot = useSelector((state) => {
    return state.spots.payload.map((eachSpotId) => state.spots[eachSpotId]);
  });
  //   console.log(oneSpot);

  let [use, setUse] = useState([]);
  const test = () => {
    return <div></div>;
  };

  //   const searchBar = document.getElementById("location-input__search");
  const spotList = document.getElementById("spotsList");
  let filter = [];
  let searchTitles;
  //   let searchPrize;
  let filteredSpots;
  let res;
  let res1 = {};
  const searchBar = () => {
    window.addEventListener("keyup", (e) => {
      const searchString = e.target.value.toLowerCase();
      if (!searchString.length || searchString.length < 3) {
      } else {
        filteredSpots = oneSpot.filter((spot) => {
          // searchTitles = console.log(spot.title);
          searchTitles =
            spot.price.toLowerCase().includes(searchString) ||
            spot.title.toLowerCase().includes(searchString);
          //   spot.title.toLowerCase().includes(searchString) ||
          //   spot.description.toLowerCase().includes(searchString) ||
          //   spot.author.toLowerCase().includes(searchString) ||
          //   spot.publisher.toLowerCase().includes(searchString) ||
          //   spot.price.includes(searchString);

          // console.log(searchTitles, spot.title);
          filter = [searchTitles, spot];
          // console.log(filter);

          let searchResultPro;
          const searchResult = filter.map((real) => {
            // console.log(deal, true);

            if (searchTitles === true) {
              let deal = real.title;
              let price = real.price;
              console.log(deal, true, price);

              res = (
                <>
                  <div className="dropdown__search-bar" id="spotsSearch">
                    <li id="searchText">
                      {[
                        <NavLink
                          id="searchText-anchor"
                          className="popUp-search__anchor"
                          to={`/spots/${real.id}`}
                          key={`a-search ${real.id}`}
                        >
                          {deal}
                        </NavLink>,
                      ]}
                    </li>
                  </div>
                </>
              );

              // if (deal !== undefined) res1.push(res);
            }
            use = res;
            // console.log(res1.length);
            // console.log(res1);
            setUse(use);
          });
        });
      }
    });
  };
  // console.log(use);

  // console.log(res1);

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
            onChange={(e) => {
              let value = e.target.value.length;
              if (value < 3) setUse(test(use));
              else {
                setUse(searchBar());
              }
            }}
          ></input>
          <div className="search-bar" id="search">
            <div className="search-input">
              <div className="autocom-box">
                <ul id="spotsList">{use}</ul>
              </div>
            </div>
          </div>
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
