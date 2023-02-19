import React from "react";
import DefaultImg from "../assets/img/NoImage.jpg";
import { BsBookmark } from "react-icons/bs";
import { useNewsCategoryContext } from "../context/newsCategoryContext";

const SingleArtilce = ({ author, title, urlToImage, category, id }) => {
  const { addToFavorites } = useNewsCategoryContext();

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
        <div className="bottom">
          <h2 className="author">
            {author === null
              ? "unknown"
              : author.length > 60
              ? author.slice(0, 60)
              : `${author}...`}
          </h2>
          <button
            className="btn btn-bookmark"
            onClick={() => addToFavorites(id)}
          >
            <BsBookmark fontSize="2rem" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleArtilce;
