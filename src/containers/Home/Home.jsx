import React, {useEffect, useState} from "react";
import {getPopularMoviesList} from "../../API/data";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Loading from "../../components/Loading";

import "./Home.css"

const Home = () => {
    const [popularMoviesList, setPopularMoviesList] = useState(0);
    const [data, setData] = useState(popularMoviesList);
    const [isLoading, setIsLoading] = useState(true);
    const [sekeletonLoading, setsekeletonLoading] = useState(true);
    const ImageUrl = process.env.REACT_APP_API_IMAGE_URL;

    useEffect(() => {
        getPopularMoviesList()
            .then((result) => {
                setPopularMoviesList(result);
                setData(result[0]);
                setIsLoading(false);
                setTimeout(() => {
                    setsekeletonLoading(false);
                  }, 2000);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, []);

    const handleDataFromChild = (childData) => {
        const activeIndex = childData;
        const activeMovieData = popularMoviesList[activeIndex];
        if (activeMovieData !== data) {
            setData(activeMovieData);
        }
    };
    
    if (isLoading) {
        return <Loading/>;
    }

    return (
        <div className="background__image" style={{ backgroundImage: `url(${ImageUrl}/${data.backdrop_path})` }} >
            <div className="container">
                <div className="content">
                    <Header/>
                    <Hero movieID={data}/>
                    <Carousel movieLists={popularMoviesList} sendDataToParent={handleDataFromChild} Loading={sekeletonLoading} />
                </div>
            </div>
        </div>
    )
}

export default Home