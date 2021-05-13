import React, { useState, useEffect } from "react";

import "./SpotsPage.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import ReviewPage from "../Reviews";
import { getOneReview } from "../../store/reviewPageReducer";

function SpotsPage() {
  const { eachSpotId } = useParams();

  // new review by ID TEST
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneReview(eachSpotId));
  }, [dispatch, eachSpotId]);

  // const reviews = useSelector((state) => state.reviews);
  // console.log(reviews);

  // each spot
  const oneSpot = useSelector((state) => {
    return state.spots.payload.map((eachSpotId) => state.spots[eachSpotId]);
  });
  // const reviews = useSelector((state) => state.reviews);
  const spots = useSelector((state) => state.spots);
  // const payload = useSelector((state) => state.spots.payload);
  // console.log(payload);
  let id = spots[eachSpotId].id;
  let title = spots[eachSpotId].title;
  let img = spots[eachSpotId].imageUrl;
  let location = spots[eachSpotId].location;
  let price = spots[eachSpotId].price;
  let description = spots[eachSpotId].description;
  let hostedDate = spots[eachSpotId].hostedDate;

  // let reviewDescription = reviews[eachSpotId].description;
  // console.log(reviewDescription);

  if (!oneSpot) {
    return null;
  }

  return (
    <>
      <div key={id.toString()} className="container_each_rent">
        <div id="single-spot__container">
          <NavLink to={`/spots/${id}`}>
            <h1 id="title">{title}</h1>
          </NavLink>
        </div>
        <div className="multiple-spot__imgContainers">
          <div className="single-big__imgContainers">
            <img
              src={img}
              alt={title}
              style={{ width: "564px", height: "426px" }}
            />
          </div>
          <div id="tiny-pic_container">
            <div className="single-tiny__imgContainers">
              <img
                src={img}
                alt={title}
                style={{ width: "274px", height: "209px" }}
              />
            </div>
            <div className="single-tiny__imgContainers">
              <img
                src={img}
                alt={title}
                style={{ width: "274px", height: "209px" }}
              />
            </div>
          </div>
          <div id="tiny2-pic_container">
            <div className="single2-tiny__imgContainers">
              <img
                src={img}
                alt={title}
                style={{ width: "274px", height: "209px" }}
              />
            </div>
            <div className="single2-tiny__imgContainers">
              <img
                src={img}
                alt={title}
                style={{ width: "274px", height: "209px" }}
              />
            </div>
          </div>
        </div>
        <div
          className="spot-information__container"
          style={{ height: "380px" }}
        >
          <div className="main-info-container">
            <h2 id="location"> {location}</h2>
            <h2 id="price">Price {price}</h2>
            <h2 id="description">{description}</h2>
            <h2 id="hostedDate">{hostedDate}</h2>
          </div>
        </div>
      </div>
      <ReviewPage />
    </>
  );
}

export default SpotsPage;
