import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {useMovieList} from '../MovieListContext'

import "./BackButton.css"

const BackButton = (props) => {
  const {setMovieList} = useMovieList();

  const goBack = () => {
    window.history.back();
    setMovieList(0);
  };

  return (
    <div className='header'>
      <h1 className='brand'><span>Movie</span>List</h1>
      <button className='btn-transparent' onClick={goBack}><FontAwesomeIcon icon={faCircleArrowLeft} size="xl" /></button>
    </div>
  );
};

export default BackButton;
