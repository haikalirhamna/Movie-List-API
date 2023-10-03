import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlay } from '@fortawesome/free-solid-svg-icons'
import './Hero.css'

const Hero = (props) => {
    const Movie = props.movieID;

    return (
        <div className='hero__wrapper'>
            <h3 className='title'>{Movie.title}</h3>
            <div className='movie_details'>
                <p className='vote_average'><span><FontAwesomeIcon icon={faStar} /></span>{Movie.vote_average}</p>
                <p className='release_date'>{Movie.release_date}</p>
            </div>
            <p className='overview'>{Movie.overview}</p>
            <div className='btn-watch'>
                <a href='/#'><span><FontAwesomeIcon icon={faPlay} size="xl" /></span>Watch</a>
            </div>
        </div>
    )
}

export default Hero;