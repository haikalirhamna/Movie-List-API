import React from "react";
import Card from "../components/Card";
import { SwiperButton } from "./SwiperButtonNav";
//import from swipper js
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

//import style swipper js
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Carousel(props) {
    const ImageUrl = process.env.REACT_APP_API_IMAGE_URL;
    const Movies = props.movieLists;
    
    const onChangeHandler = (e) => {
        props.sendDataToParent(e)
    }

    return (
        <div className="wrapper">
            <Swiper
                modules={[Pagination]}
                slidesPerView={7}
                loop={true}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                  }}
                centeredSlides={true}
                scrollbar={{ draggable: true }}
            >
                {!props.Loading ? (
                    Movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <Card 
                                imageCard={`${ImageUrl}/${movie.poster_path}`}
                            />
                        </SwiperSlide>
                    ))
                ) : (
                    Movies.map((movie) => (
                        <SwiperSlide key={movie.id} style={{ marginRight: 0}}>
                            <div className='sekeleton'></div>
                        </SwiperSlide>
                    ))
                )}
                <SwiperButton changeDataHandler={onChangeHandler}/>
            </Swiper>
        </div>
    )
}

export default Carousel;