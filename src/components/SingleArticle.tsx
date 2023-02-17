import React from "react";
import DefaultImg from "../assets/img/NoImage.jpg";

const SingleArtilce = ({ author, title, urlToImage, category }) => {
  return (
    <div className="article-container">
      {urlToImage === null ? (
        <img src={DefaultImg} alt="something" />
      ) : (
        <img src={urlToImage} alt="something" />
      )}
      <div className="info-container">
        <h2 className="category">{category}</h2>
        <h2 className="title">
          {title.length > 60 ? `${title.slice(0, 60)}...` : title}
        </h2>
        <h2 className="author">
          {author === null
            ? "unknown"
            : author.length > 60
            ? author.slice(0, 60)
            : `${author}...`}
        </h2>
      </div>
    </div>
  );
};

export default SingleArtilce;
