import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {useMovieList} from '../MovieListContext';

import "./CardWithHover.css";

function CardWithHover(props) {
  const navigate = useNavigate()
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleCardClick = () => {
    props.onClickCard(props.id);
    navigate('/details');
  }

  return (
    <div className="card2" onClick={handleCardClick}>
      <img src={props.imageCard} alt={"imageMovies"}/>
      <div className="hover__title">
        <p>{props.title}</p>
      </div>
    </div>
  )
}

export default CardWithHover;