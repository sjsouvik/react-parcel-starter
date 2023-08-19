import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("section", { className: "item" }, [
  React.createElement("h1", {}, "Heading for the section"),
  React.createElement("p", {}, "Description"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
