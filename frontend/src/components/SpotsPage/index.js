import React, { useState, useEffect } from "react";

import "./SpotsPage.css";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

function SpotsPage() {
  const oneSpot = useSelector((state) => {
    return state.spots.payload.map((eachSpotId) => state.spots[eachSpotId]);
  });

  return (
    <>
      {oneSpot.map((spot) => {
        return (
          <div key={spot.id.toString()}>
            <NavLink to={`/spots/${spot.id}`}>
              <h1>{spot.title}</h1>
            </NavLink>
          </div>
        );
      })}
    </>
  );
}

export default SpotsPage;
