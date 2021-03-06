// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";
// main Page
import * as spotPageActions from "./store/spotPageReducer";

// import ReviewPage from "./components/Reviews";
// import ExampleSearchBox from "./components/ExampleSearchBox";
import SignupFormPage from "./components/SignupFormPage";
import SignupFormHost from "./components/SignupFormHost";
import HomePage from "./components/HomePage";
import SpotsSearchPage from "./components/SpotsSearchPage";
import SpotsPage from "./components/SpotsPage";
import Navigation from "./components/Navigation";
import GoogleMap from "./components/GoogleMaps";
import { useSelector } from "react-redux";
import "./index.css";

function App() {
  const dispatch = useDispatch();

  const [isSpotPage, setIsSpotPage] = useState(false);

  useEffect(() => {
    dispatch(spotPageActions.getOnespot())?.then(() => setIsSpotPage(true));
  }, [dispatch]);

  // user session
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser())?.then(() => setIsLoaded(true));
  }, [dispatch]);

  // const spotsSearchPage = useSelector((state) => state.spots);

  return (
    <>
      <Navigation isLoaded={isLoaded} />

      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/host/signup">
            <SignupFormHost />
          </Route>
          <Route path="/spots" exact>
            <GoogleMap />
            <SpotsSearchPage />
          </Route>
          <Route path={["/spots/:eachSpotId"]} exact>
            <SpotsPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
