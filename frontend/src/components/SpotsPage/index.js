import React, { useState, useEffect } from "react";

import "./SpotsPage.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

import { getOnespot } from "../../store/spotPageReducer";

function SpotsPage() {
  const { eachSpotId } = useParams();

  // const dispatch = useDispatch();
  // useEffect(() => {});

  const oneSpot = useSelector((state) => {
    return state.spots.payload.map((eachSpotId) => state.spots[eachSpotId]);
  });
  const spots = useSelector((state) => state.spots);
  // console.log(spots[eachSpotId]);

  const [showAddReviewBtn, SetShowAddReviewBtn] = useState(false);

  // let cc = /^a$/;
  // function matchExact(r, str) {
  //   let match = str.match(r);
  //   return match && str === match[0];
  // }
  // // console.log(r === matchExact("a"));

  let id = spots[eachSpotId].id;
  // console.log(id);
  let title = spots[eachSpotId].title;
  let img = spots[eachSpotId].imageUrl;
  let location = spots[eachSpotId].location;
  let price = spots[eachSpotId].price;
  let description = spots[eachSpotId].description;
  let hostedDate = spots[eachSpotId].hostedDate;

  if (!oneSpot) {
    return null;
  }

  return (
    <>
      <div key={id.toString()}>
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
          style={{ height: "2074px" }}
        >
          <div className="main-info-container">
            <h2 id="location"> {location}</h2>
            <h2 id="price">Price {price}</h2>
            <h2 id="description">{description}</h2>
            <h2 id="hostedDate">{hostedDate}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpotsPage;
