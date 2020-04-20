import { HelloWorld } from "my_npm_pkg2";
import ReactDOM from "react-dom";
import React from "react";
var loadme = function() {
  const Test = () => {
    return (
      <div>
        <HelloWorld name="test" />
      </div>
    );
  };

  const domContainer = document.querySelector("#app");
  ReactDOM.render(<Test />, domContainer);
};

window.addEventListener("load", function() {
  loadme();
});
