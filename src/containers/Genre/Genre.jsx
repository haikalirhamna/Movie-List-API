import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import {getGenreMovies, getGenreTvSeries, getMovies, getTV} from "../../API/data";
import {useMovieList} from '../../MovieListContext';

import "./Genre.css"

const Genre = () => {
    const [genreMVList, setgenreMVList] = useState([]);
    const [genreTVList, setGenreTVList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {setMovieList} = useMovieList();
    const navigate = useNavigate();

    useEffect(() => {
        getGenreMovies()
            .then((result) => {
                setgenreMVList(result)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

        getGenreTvSeries()
            .then((result) => {
                setGenreTVList(result)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [isLoading]);

    if (isLoading) {
        return <Loading/>
    }

    return (
        <div className="background">
          <div className="container">
            <Header/>
            <div className="title">
              <h2>Genre Lists</h2>
                <div className="genres__wrapper">
                  <h2>Movie</h2>
                  <ul>
                    {genreMVList.map((movie) => (
                        <li
                          key={movie.id}
                          onClick={() => {
                            getMovies(movie.id).then((response) => {
                              setMovieList(response)
                              navigate('/movie')
                              })
                          }}>{movie.name}</li>
                      ))
                    }
                  </ul>
                </div>
                <div className="genres__wrapper">
                    <h2>TV Series</h2>
                    <ul>
                        {genreTVList.map((series) => (
                            <li 
                            key={series.id}
                            onClick={() => {
                              getTV(series.id).then((response) => {
                                setMovieList(response)
                                navigate('/tv-series')
                                })
                            }}>{series.name}</li>
                          ))}
                    </ul>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Genre;