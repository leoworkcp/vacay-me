// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
// import * as sessionActions from "../../store/session";
import "./SpotsSearchPage.css";

function SpotsSearchPage() {
  //   const dispatch = useDispatch();
  //   const sessionUser = useSelector((state) => state.session.user);
  //   const [errors, setErrors] = useState([]);

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
              <div className="div-img__container">{`image`}</div>
              <div className="div-title__container">{`title`}</div>
              <div className="div-description__container">{`description`}</div>
              <div className="div-price__container">{`$Price`}</div>
            </div>
            <div className="div-spots__container">
              <div className="div-img__container">{`image`}</div>
              <div className="div-title__container">{`title`}</div>
              <div className="div-description__container">{`description`}</div>
              <div className="div-price__container">{`$Price`}</div>
            </div>
            <div className="div-spots__container">
              <div className="div-img__container">{`image`}</div>
              <div className="div-title__container">{`title`}</div>
              <div className="div-description__container">{`description`}</div>
              <div className="div-price__container">{`$Price`}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpotsSearchPage;
