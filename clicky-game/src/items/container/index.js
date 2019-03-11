import React from "react";
import "./style.css";

function container(props) {
  return <div className="container">{props.children}</div>;
}

export default container;