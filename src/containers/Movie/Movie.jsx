import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MovieList from "../../components/MovieList";
import { getMoviesList } from "../../API/data";
import { useMovieList } from '../../MovieListContext';
import axios from 'axios';

const Movie = () => {
  const baseURL = process.env.REACT_APP_API_URL;
  const { movieList } = useMovieList();
  const [isLoading, setIsLoading] = useState(true);
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesList()
        .then((result) => {
            setMovies(result);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            setIsLoading(false);
        });
  }, []);

  const getMovie = async(id) => {
    try {
      const data = await axios.get(`${baseURL}/movie/${id}`)
      console.log(data);
    } catch (error) {
      console.error('Error get Data:', error)
    }
  }

  // Promise.all([getMoviesList, getMovie]).then((value) => {
  //   console.log(value);
  // })

  if (isLoading) {
    return <Loading/>
  }

  if (movieList) {
    return (
      <div>
        <Header />
        <div>
          {movieList.map((v) => {
            if (v.media_type === "movie") {
              return <MovieList key={v.id} movieName={v.title} />;
            } else if (v.media_type === "tv") {
              return <MovieList key={v.id} movieName={v.name} />;
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Header/>
        <div>
          {Movies.map((i) => (
            <MovieList key={i.id} movieName={i.id}/>
          ))}
        </div>
      </div>
    )
  }

}

export default Movie;