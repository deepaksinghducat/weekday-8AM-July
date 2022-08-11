import React from "react";

function CardUi(props) {
  return (
    <div className="card">
      <img src={props.item.path} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.item.title}</h5>
        <p className="card-text">
          {props.item.description}
        </p>
      </div>
    </div>
  );
}

export default CardUi;
