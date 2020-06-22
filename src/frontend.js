import React from "react";
import ReactDOM from "react-dom";
import RenderResort from "./components/renderResort";
import { forEach } from "lodash";

window.addEventListener("DOMContentLoaded", () => {
  const resortWrapper = document.querySelectorAll(".resort-block-wrapper");
  if (resortWrapper) {
    forEach(resortWrapper, (resort) => {
      const resortName = resort.dataset.resortname;
      ReactDOM.render(<RenderResort resortName={resortName} />, resort);
    });
  }
});
