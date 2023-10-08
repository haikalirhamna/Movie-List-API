import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import CardWithHover from "../../components/CardWithHover";
import {movieDetails} from "../../API/data";
import {useMovieList} from '../../MovieListContext';

import "./Movie.css"

const Movie = () => {
    const ImageUrl = process.env.REACT_APP_API_IMAGE_URL;
    const {movieList} = useMovieList();
    const [isLoading, setIsLoading] = useState(true);
    const [Movies, setMovies] = useState([]);

    useEffect(() => {
        if (movieList.length > 0) {
            setMovies(movieList)
            console.log(movieList);
            setIsLoading(false)
        } else {
            movieDetails().then((result) => {
                setMovies(result)
                setIsLoading(false)
            })
        }
    }, [Movies]);

    if (isLoading) {
        return <Loading/>
    }

    return (
        <div className='background'>
            <div className='container'>
                <Header/>
                <div className='wrapper__card'>
                    {
                        Movies.map((v) => (
                          <React.Fragment>
                                <CardWithHover
                                    key={v.id}
                                    id={v.id}
                                    imageCard={`${ImageUrl}/${v.poster_path}`}
                                    title={v.original_title}
                                    />
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
        </div>
    );

}

export default Movie;