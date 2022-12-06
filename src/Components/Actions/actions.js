import React from "react";
import "./action.css";

function Action(props) {
  const { head, img, text } = props;
  return (
    <div className="actions-first">
      <div className="actions-first-div">
        <img className="img" src={img} />
        <div>{head}</div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
}

export default Action;
