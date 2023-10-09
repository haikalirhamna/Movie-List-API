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
  const [sekeletonLoading, setsekeletonLoading] = useState(true);
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
      setMovies(movieList)
      setIsLoading(false)
      setTimeout(() => {
        setsekeletonLoading(false);
      }, 2000);
  }, []);

  if (isLoading) {
    return <Loading/>
  }

  return (
    <div className='background'>
      <div className='container'>
        <BackButton />
        <div className='wrapper__card'>
          {!sekeletonLoading ? (
            Movies.map((v) => (
              <React.Fragment key={v.id}>
                {v.poster_path !== null ? (
                  <CardWithHover
                    imageCard={`${ImageUrl}/${v.poster_path}`}
                    title={v.title || v.name}
                  />
                ) : (
                  <div className='notFound'>
                    <p>Not found</p>
                  </div>
                )}
              </React.Fragment>
            ))
          ) : (
            Movies.map(() => (
              <React.Fragment>
                  <div className='sekeleton'></div>
              </React.Fragment>
          ))
          )}
        </div>
      </div>
    </div>
  );  

}

export default MovieList;