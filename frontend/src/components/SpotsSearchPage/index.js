import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";

import "./SpotsSearchPage.css";

function SpotsSearchPage(spots) {
  // const { eachSpotId } = useParams();

  // const visit = (obj, fn) => {
  //   const values = Object.values(obj);
  //   // const keys = Object.keys(obj);
  //   values.forEach((val) =>
  //     //  data.push(val)
  //     val && typeof val === "object" ? visit(val, fn) : data.push(val)
  //   );
  //   // keys.forEach((val1) =>
  //   //   val1 && typeof val1 === "object" ? visit(val1, fn) : fn(val1)
  //   // );
  // };
  // // Quick test
  // const print = (val) => console.log(val);
  // visit(spots, print);
  const oneSpot = useSelector((state) => {
    return state.spots.payload.map((eachSpotId) => state.spots[eachSpotId]);
  });

  // important logs
  // console.log(spots);
  // console.log(oneSpot);
  // let spotId = {};
  // oneSpot.map((spot) => {
  //   console.log(spot.id);
  // });

  let count = 0;
  // console.log(count);
  return (
    <>
      <div className="title-page__container">
        <div className="title-main__container">
          <h2>Search for exotic places</h2>
        </div>
      </div>
      <div className="filters-main__container">
        <div className="amount-stays__container">{`300+stays`}</div>
        <h1>Stays in selected map area</h1>
        <div className="filters-btn__container">
          <div className="filter-price__container">
            <button>
              <span>{`Price`}</span>
            </button>
          </div>
          <div className="filter-location__container">
            <button>
              <span>{`Location`}</span>
            </button>
          </div>
          <div className="filter-availability__container">
            <button>
              <span>{`Availability`}</span>
            </button>
          </div>
          <div className="filter-description__container">
            <button>
              <span>{`Description`}</span>
            </button>
          </div>
        </div>
        <div className="show-title__container">
          <div className="spots-titles__container">
            <h3>{`New York`}</h3>
          </div>
          <div className="spots-showMore__container">
            <button>
              <span>{`<`}</span>
            </button>
            <button>
              <span>{`>`}</span>
            </button>
          </div>
        </div>
        {oneSpot.map((spot, idx) => {
          idx += 1;
          count += 1;
          if (idx !== 1) {
            return (
              <div key={spot.id.toString()} id="each-spot">
                <div className="spots-main__container">
                  <div className="main-spots__div-container">
                    <div className="div-spots__container">
                      <div className="div-img__container">
                        <NavLink to={`/spots/${spot.id}`}>
                          <img
                            id="imageId"
                            style={{ width: "303px", height: "168px" }}
                            src={spot.imageUrl}
                            alt="avatar"
                          />
                        </NavLink>
                      </div>
                      <div className="div-title__container">
                        <h2>{spot.title}</h2>
                      </div>
                      <div className="div-description__container">
                        {spot.description}
                      </div>
                      <div className="div-price__container">{spot.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
        ;
      </div>
    </>
  );
}

export default SpotsSearchPage;
