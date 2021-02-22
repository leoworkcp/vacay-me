// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";

import SignupFormPage from "./components/SignupFormPage";
import SignupFormHost from "./components/SignupFormHost";
import HomePage from "./components/HomePage";
import SpotsSearchPage from "./components/SpotsSearchPage";
import Navigation from "./components/Navigation";
import GoogleMap from "./components/GoogleMaps";

import "./index.css";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/host/signup">
            <SignupFormHost />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/spots">
            <SpotsSearchPage />
            <GoogleMap />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
