import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import CardWithHover from "../../components/CardWithHover";
import {tvDetails} from "../../API/data";
import {useMovieList} from '../../MovieListContext';

const TV = () => {
    const ImageUrl = process.env.REACT_APP_API_IMAGE_URL;
    const {movieList} = useMovieList();
    const [isLoading, setIsLoading] = useState(true);
    const [Movies, setMovies] = useState([]);

    // console.log(movieList);

    useEffect(() => {
        if (movieList.length > 0) {
            setMovies(movieList)
            setIsLoading(false)
        } else {
            tvDetails().then((result) => {
                // console.log(result);
                setMovies(result)
                setIsLoading(false)
            })
        }
    }, [Movies]);

    // console.log(Movies);

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
                                imageCard={`${ImageUrl}/${v.poster_path}`}/>
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
        </div>
    );

}

export default TV;