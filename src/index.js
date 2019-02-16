import { Normalize } from "styled-normalize";
import React from "react";
import ReactDOM from "react-dom";

import wttjContent from "./assets/wttj-content";
import Widget from "./Widget";

import * as serviceWorker from "./serviceWorker";

// function to get params from url for the demo
function getParams(location) {
  const searchParams = new URLSearchParams(location.search);
  return {
    columns: searchParams.get("columns") || undefined,
    rows: searchParams.get("rows") || undefined
  };
}
// set values on constant
const columns = getParams(window.location).columns;
const rows = getParams(window.location).rows;

ReactDOM.render(
  <React.Fragment>
    {/* add styled-normalize to reset dom css */}
    <Normalize />
    <Widget
      columns={columns && Number(columns)}
      company={wttjContent.company}
      content={wttjContent.content}
      rows={rows && Number(rows)}
    />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
