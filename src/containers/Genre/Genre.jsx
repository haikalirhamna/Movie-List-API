import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { getGenreMovies, getGenreTvSeries } from "../../API/data";

import "./Genre.css"

const Genre = () => {
  const [movieList, setMovieList] = useState([]);
  const [tvSeriesList, setTvSeriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGenreMovies()
        .then((result) => {
            setMovieList(result)
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });

    getGenreTvSeries()
        .then((result) => {
            setTvSeriesList(result)
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
  }, []);

  if (isLoading) {
    <Loading/>
  }

  return (
    <div className="container background">
      <Header />
      <div className="title">
        <h2>Genre Lists</h2>
        <div className="genres__wrapper">
          <h2>Movie</h2>
          <ul>
            {movieList.map((movie) => (
              <li key={movie.id}>{movie.name}</li>
            ))}
          </ul>
        </div>
        <div className="genres__wrapper">
          <h2>TV Series</h2>
          <ul>
            {tvSeriesList.map((series) => (
              <li key={series.id}>{series.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Genre;