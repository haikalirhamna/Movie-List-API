import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {useMovieList} from '../MovieListContext';

import "./CardWithHover.css";

function CardWithHover(props) {
  const navigate = useNavigate()
  // const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="card2" onClick={() => {
      console.log(props.id);
      // navigate('/details')
    }}>
      <img src={props.imageCard} alt={"imageMovies"}/>
      <div className="hover__title">
        <p>{props.title}</p>
      </div>
    </div>
  )
}

export default CardWithHover;