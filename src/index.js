import { Normalize } from "styled-normalize";
import React from "react";
import ReactDOM from "react-dom";

import Widget from "./Widget/";
import * as serviceWorker from "./serviceWorker";

// add styled-normalize to reset dom css
ReactDOM.render(
  <React.Fragment>
    <Normalize />
    <Widget />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
