import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import CardWithHover from "../../components/CardWithHover";
import {tvDetails} from "../../API/data";
import {useMovieList} from '../../MovieListContext';

const TV = ({onClick}) => {
    const ImageUrl = process.env.REACT_APP_API_IMAGE_URL;
    const {movieList} = useMovieList();
    const [isLoading, setIsLoading] = useState(true);
    const [sekeletonLoading, setsekeletonLoading] = useState(true);
    const [Movies, setMovies] = useState([]);

    useEffect(() => {
        if (movieList.length > 0) {
            setMovies(movieList)
            setIsLoading(false)
            setTimeout(() => {
                setsekeletonLoading(false);
              }, 2000);
        } else {
            tvDetails().then((result) => {
                setMovies(result)
                setIsLoading(false)
                setTimeout(() => {
                    setsekeletonLoading(false);
                  }, 2000);
            })
        }
    }, []);

    console.log(Movies);

    if (isLoading) {
        return <Loading/>
    }

    return (
        <div className='background'>
            <div className='container'>
                <Header/>
                <div className='wrapper__card'>
                {!sekeletonLoading ? (
                        Movies.map((v) => (
                            <React.Fragment key={v.id}>
                                {
                                    v !== 'Not Found'
                                        ? (
                                            <CardWithHover
                                                id={v.id}
                                                imageCard={`${ImageUrl}/${v.poster_path}`}
                                                title={v.original_name}
                                                onClickCard={onClick}/>
                                        )
                                        : (
                                            <div className='notFound'>
                                                <p>NOT FOUND</p>
                                            </div>
                                        )
                                }
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

export default TV;