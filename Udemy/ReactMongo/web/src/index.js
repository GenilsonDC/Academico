import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./View/Home";
import Task from "./View/Task";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
    {/* <Task /> */}
  </React.StrictMode>
);
