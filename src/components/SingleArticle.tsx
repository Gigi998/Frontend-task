import React from "react";
import DefaultImg from "../assets/img/NoImage.jpg";

const SingleArtilce = ({ author, title, urlToImage }) => {
  return (
    <div className="article-container">
      {urlToImage === null ? (
        <img src={DefaultImg} alt="something" />
      ) : (
        <img src={urlToImage} alt="something" />
      )}
      <div className="info-container">
        <h2 className="category">CATEGORY</h2>
        <h2 className="title">
          {title.length > 70 ? `${title.slice(0, 70)}...` : title}
        </h2>
        <h2 className="author">{author === null ? "unknown" : author}</h2>
      </div>
    </div>
  );
};

export default SingleArtilce;
