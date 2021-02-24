import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./ProductList";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

import "./styles.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

function Appv2() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Appv2 />
  </Provider>,
  rootElement
);
