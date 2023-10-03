import React from "react";
import './Loading.css'

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="loader">
                <div className="dot" id="dot_1"></div>
                <div className="dot" id="dot_2"></div>
                <div className="dot" id="dot_3"></div>
            </div>
        </div>
    )
}

export default Loading;