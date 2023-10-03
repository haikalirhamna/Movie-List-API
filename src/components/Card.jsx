import React, { useState } from "react";
import "./Card.css";

function Card(props) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleLoadImage = () => {
    setIsImageLoaded(true);
  };

  return (
    <div
      className={`card ${isImageLoaded ? "image-loaded" : "skeleton-card"}`}
      style={{ backgroundImage: `url(${props.imageCard})` }}
    >
      {/* Tambahkan onLoad event untuk memanggil handleLoadImage saat gambar selesai dimuat */}
      <img src={props.imageCard} alt="" onLoad={handleLoadImage} style={{ display: "none" }} />
      {isImageLoaded && (
        <div className="card-content">
          {/* Konten kartu dapat ditambahkan di sini */}
        </div>
      )}
    </div>
  );
}

export default Card;
