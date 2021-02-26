import React, { useState, useEffect } from "react";

import "./SpotsPage.css";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

function SpotsPage() {
  const oneSpot = useSelector((state) => {
    return state.spots.payload.map((eachSpotId) => state.spots[eachSpotId]);
  });

  let url = window.location.href.split("");
  let count = 0;
  // console.log(url);
  for (let i = 0; i < url.length; i++) {
    count++;
    url.pop(url[i]);
    if (count === 8) break;
  }
  url = url.join("");
  // console.log(url);

  return (
    <>
      {oneSpot.map((spot) => {
        if (window.location.href === `${url}/spots/${spot.id}`) {
          return (
            <div key={spot.id.toString()}>
              <div id="single-spot__container">
                <NavLink to={`/spots/${spot.id}`}>
                  <h1 id="title">{spot.title}</h1>
                </NavLink>
              </div>
              <div className="multiple-spot__imgContainers">
                <div className="single-big__imgContainers">
                  <img
                    src={spot.imageUrl}
                    alt={spot.title}
                    style={{ width: "564px", height: "426px" }}
                  />
                </div>
                <div id="tiny-pic_container">
                  <div className="single-tiny__imgContainers">
                    <img
                      src={spot.imageUrl}
                      alt={spot.title}
                      style={{ width: "274px", height: "209px" }}
                    />
                  </div>
                  <div className="single-tiny__imgContainers">
                    <img
                      src={spot.imageUrl}
                      alt={spot.title}
                      style={{ width: "274px", height: "209px" }}
                    />
                  </div>
                </div>
                <div id="tiny2-pic_container">
                  <div className="single2-tiny__imgContainers">
                    <img
                      src={spot.imageUrl}
                      alt={spot.title}
                      style={{ width: "274px", height: "209px" }}
                    />
                  </div>
                  <div className="single2-tiny__imgContainers">
                    <img
                      src={spot.imageUrl}
                      alt={spot.title}
                      style={{ width: "274px", height: "209px" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="spot-information__container"
                style={{ height: "2074px" }}
              >
                <div className="main-info-container">
                  <h2 id="location"> {spot.location}</h2>
                  <h2 id="price">Price {spot.price}</h2>
                  <h2 id="description">{spot.description}</h2>
                  <h2 id="hostedDate">{spot.hostedDate}</h2>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

export default SpotsPage;
