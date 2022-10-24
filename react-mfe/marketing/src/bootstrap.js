import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// mount function to start/render the app to the DOM given place
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// If we are running through container and we should export the mount function, and host (container) app can invoke mount function
export { mount };
