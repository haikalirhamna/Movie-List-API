import React, {useState} from "react";
import { useSwiper } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const SwiperButton = (props) => {
    const [childData, setChildData] = useState(0);
    const swiper = useSwiper();
    
    const handlePrevClick = () => {
        let newData;
        if (childData === 0) {
          swiper.slidePrev();
          setChildData(0)
          newData = 19;
        } else {
            swiper.slidePrev();
            newData = (childData - 1) % 20;
        }
      
        setTimeout(() => {
            setChildData(newData);
            props.changeDataHandler(newData);
          }, 500);
    };
      

    const handleNextClick = () => {
        swiper.slideNext(); 
        const newData = (childData + 1) % 20;
        setTimeout(() => {
            setChildData(newData);
            props.changeDataHandler(newData);
          }, 500);
    };

    return (
        <div className="button__wrapper">
            <span>
                <FontAwesomeIcon icon={faChevronLeft} size="2xl" className="btn" style={{ color: "white" }} onClick={handlePrevClick}/>
            </span>
            <span>
                <FontAwesomeIcon icon={faChevronRight} size="2xl" className="btn" style={{ color: "white" }} onClick={handleNextClick}/>
            </span>
        </div>
    )
}