import React, { useState, useEffect } from "react";

import "./Reviews.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getOneReview } from "../../store/reviewPageReducer";
function ReviewPage() {
  let count = 0;

  let test = [{ id: 1 }, { id: 2 }, { id: 3 }];

  // let review = useSelector((state) => state.reviews);
  // let payload = review.payload;
  // // console.log(payload);
  // console.log(review);
  // let description;
  // let createdAt;
  // let created = [];

  // const reviewStatus = async () => {
  //   let a = await payload.map((e) => review[e]);
  //   let c = await a.forEach((ele) => {
  //     description = ele.description;
  //     createdAt = ele.createdAt;
  //   });
  //   for (let i = 0; i < createdAt.length; i++) {
  //     if (i === 7) break;
  //     created.push(createdAt[i]);
  //   }
  //   created = created.join("");
  // };

  const { eachSpotId } = useParams();

  // new review by ID TEST
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getOneReview(eachSpotId));
  // }, [dispatch, eachSpotId]);

  const oneReview = useSelector((state) => {
    return state.reviews.list.map((eachSpotId) => state.reviews[eachSpotId]);
  });

  // console.log(oneSpot);

  // console.log(description);
  // console.log(createdAt);

  // console.log(created);

  return (
    <>
      <div className="testing">
        <h1></h1>
        <h1></h1>
      </div>
      {oneReview.map((review, idx) => {
        idx += 1;
        count += 1;
        if (idx !== 0) {
          return (
            <div key={review.id}>
              <h1>{review.description}</h1>
              <h2>{review.username}</h2>
            </div>
          );
        }
      })}
    </>
  );
}
export default ReviewPage;
