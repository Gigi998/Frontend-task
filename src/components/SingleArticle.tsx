import React from "react";

const SingleArtilce = ({ author, title, urlToImage }) => {
  return (
    <div className="article-container">
      <img src={urlToImage} alt="some image" className="imgd" />
      <div className="info-container">
        <h2 className="category">CATEGORY</h2>
        <h2 className="title">{title}</h2>
        <h2 className="author">{author}</h2>
      </div>
    </div>
  );
};

export default SingleArtilce;
