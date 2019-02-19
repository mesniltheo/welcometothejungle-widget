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
    autoplay: searchParams.get("autoplay") === "1",
    columns: searchParams.get("columns") || undefined,
    rows: searchParams.get("rows") || undefined
  };
}
// set values on constant
const autoplay = getParams(window.location).autoplay;
const columns = getParams(window.location).columns;
const rows = getParams(window.location).rows;

ReactDOM.render(
  <div style={{ width: "100%", height: "100%", position: "absolute" }}>
    {/* add styled-normalize to reset dom css */}
    <Normalize />
    <Widget
      autoplay={autoplay}
      columns={columns && Number(columns)}
      company={wttjContent.company}
      content={wttjContent.content}
      rows={rows && Number(rows)}
    />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
