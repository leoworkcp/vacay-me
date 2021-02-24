import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as spotActions from "../../store/spot";
// import { Redirect } from "react-router-dom";
// import * as sessionActions from "../../store/session";
import "./SpotsSearchPage.css";

// import { getspot } from "../../store/spot";

function SpotsSearchPage(spots) {
  // const spotsListing = useSelector((state) => state.products.spot);
  // console.log(spotsListing);

  // const dispatch = useDispatch();

  // const [showTitle, setShowTitle] = useState(false);

  // const openTitle = () => {
  //   if (showTitle) return;
  //   setShowTitle(true);
  // };

  // useEffect(() => {
  //   if (!showTitle) return;

  //   const closeTitle = () => {
  //     setShowTitle(false);
  //   };

  //   document.addEventListener("click", closeTitle);

  //   return () => document.removeEventListener("click", closeTitle);
  // }, [showTitle]);
  // openTitle();
  // console.log(showTitle);

  console.log(spots);
  // const spotState = (state) => state.list;

  // console.log("useSelector:", spot);

  // useEffect(() => {
  //   const getSpots = async () => {
  //     const res = await fetch(`/api/spots`);
  //     const jsRes = await res.json();
  //     // console.log(jsRes.spots);
  //     setSpots(jsRes);
  //   };
  //   getSpots();
  // }, []);

  // const [spots, setSpots] = useState([]);

  // useEffect(() => {
  //   setSpots(dispatch(getspot()));
  // }, [dispatch]);
  let data = [];
  const visit = (obj, fn) => {
    const values = Object.values(obj);
    // const keys = Object.keys(obj);
    var val;
    values.forEach((val) =>
      //  data.push(val)
      val && typeof val === "object" ? visit(val, fn) : data.push(val)
    );

    // keys.forEach((val1) =>
    //   val1 && typeof val1 === "object" ? visit(val1, fn) : fn(val1)
    // );
  };

  // Quick test
  const print = (val) => console.log(val);
  visit(spots, print);
  // let data = [];
  // data.push(spots);
  console.log(data);

  console.log(data[4]);
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
        <div className="spots-main__container">
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
          <div className="main-spots__div-container">
            <div className="div-spots__container">
              <div className="div-img__container">
                <img
                  style={{ width: "253px", height: "168px" }}
                  src={
                    "https://images.unsplash.com/photo-1532048304129-314d4c34fbc4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGV4b3RpYyUyMHBsYWNlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  }
                  alt="avatar"
                />
              </div>
              <div className="div-title__container">{data[1]}</div>
              <div className="div-description__container">{data[2]}</div>
              <div className="div-price__container">{data[4]}</div>
            </div>
            <div className="div-spots__container">
              <div className="div-img__container">
                <img
                  style={{ width: "253px", height: "168px" }}
                  src={
                    "https://images.unsplash.com/photo-1532048304129-314d4c34fbc4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGV4b3RpYyUyMHBsYWNlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  }
                  alt="avatar"
                />
              </div>
              <div className="div-title__container"></div>
              <div className="div-description__container">{data[12]}</div>
              <div className="div-price__container">{data[14]}</div>
            </div>
            <div className="div-spots__container">
              <div className="div-img__container">
                <img
                  style={{ width: "253px", height: "168px" }}
                  src={
                    "https://images.unsplash.com/photo-1532048304129-314d4c34fbc4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGV4b3RpYyUyMHBsYWNlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  }
                  alt="avatar"
                />
              </div>
              <div className="div-title__container">{data[1]}</div>
              <div className="div-description__container">{data[2]}</div>
              <div className="div-price__container">{data[4]}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpotsSearchPage;
