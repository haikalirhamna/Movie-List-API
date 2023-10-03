import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { getGenreMovies, getGenreTvSeries } from "../../API/data";

import "./Genre.css"

const Genre = () => {
  const [movieList, setMovieList] = useState([]);
  const [tvSeriesList, setTvSeriesList] = useState([]);

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

  console.log(movieList);
  console.log(tvSeriesList);

  return (
    <div className="container background">
      <Header />
      <div className="title">
        <h2>Genre Lists</h2>
        <div>
          <h2>Movie</h2>
          <ul>
            {movieList.map((movie) => (
              <li key={movie.id}>{movie.name}</li>
            ))}
          </ul>
        </div>
        <div>
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