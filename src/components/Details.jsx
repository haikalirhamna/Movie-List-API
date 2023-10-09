import React from "react";
import BackButton from "./BackButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

import "./Details.css"

const Details = ({movie}) => {
  const ImageUrl = process.env.REACT_APP_API_IMAGE_URL;

  return (
    <div className='background'>
      <div className='container'>
        <BackButton/>
        <div className="wrapper">
          <div className="wrapper__header">
            <img src={`${ImageUrl}/${movie.poster_path}`} alt="" />
            <div>
              <h2 className="title_movie" style={{ marginBottom: '16px' }}>{movie.original_title || movie.original_name}</h2>
              <div className="rating" style={{ marginBottom: '16px' }}>
                <p className='vote_average'><span><FontAwesomeIcon icon={faStar} /></span>{movie.vote_average}</p>
                <p className='release_date'>{movie.release_date || movie.first_air_date}</p>
              </div>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details;