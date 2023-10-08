import React, { useEffect, useState } from "react";
import "./Card.css";

function Card(props) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="card">
      <img src={props.imageCard} alt="" />
    </div>
  )
}

export default Card;
