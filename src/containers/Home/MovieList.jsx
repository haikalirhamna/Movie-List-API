import React, {useEffect, useState} from 'react';
import BackButton from '../../components/BackButton';
import CardWithHover from "../../components/CardWithHover";
import Loading from '../../components/Loading';
import { useMovieList } from '../../MovieListContext';

import "./MovieList.css"

const MovieList = () => {
  const ImageUrl = process.env.REACT_APP_API_IMAGE_URL;
  const { movieList } = useMovieList();
  const [isLoading, setIsLoading] = useState(true);
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
      setMovies(movieList)
      setIsLoading(false)
  }, []);

  if (isLoading) {
    return <Loading/>
  }

  return (
    <div className='background'>
      <div className='container'>
        <BackButton/>
        <div className='wrapper__card'>
          {Movies.map((v) => (
            <React.Fragment>
              <CardWithHover key={v.id} imageCard={`${ImageUrl}/${v.poster_path}`} title={v.original_title || v.original_name}/>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );

}

export default MovieList;