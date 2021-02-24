// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import * as spotActions from "./store/spot";

import SignupFormPage from "./components/SignupFormPage";
import SignupFormHost from "./components/SignupFormHost";
import HomePage from "./components/HomePage";
import SpotsSearchPage from "./components/SpotsSearchPage";
import Navigation from "./components/Navigation";
import GoogleMap from "./components/GoogleMaps";
import { useSelector } from "react-redux";
import "./index.css";

function App() {
  const spotsListing = useSelector((state) => state.products.spot);

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isListed, setIsListed] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    dispatch(spotActions.getspot()).then(() => setIsListed(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} isListed={isListed} />
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
          <Route path="/spots">
            <GoogleMap />
            <SpotsSearchPage spot={spotsListing} />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
