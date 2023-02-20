import React, { useEffect } from "react";
import DefaultImg from "../assets/img/NoImage.jpg";
import { BsBookmark } from "react-icons/bs";
import { useNewsCategoryContext } from "../context/newsCategoryContext";

const SingleArtilce = ({ author, title, urlToImage, category, id }) => {
  const { addToFavorites, favoritesArray, currentLocation } =
    useNewsCategoryContext();

  // Check if item is already in favorites array
  const handleClick = (id) => {
    if (favoritesArray.length === 0) {
      addToFavorites(id);
    } else {
      let isInArr;
      isInArr = favoritesArray.find((item) => item.id === id);
      if (!isInArr) {
        addToFavorites(id);
      } else {
        return;
      }
    }
  };

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
          {title.length > 60 ? `${title.slice(0, 50)}...` : title}
        </h2>
        <div className="bottom">
          <h2 className="author">
            {author === null || author === "" ? "unknown" : author}
          </h2>
          {currentLocation !== "/favorites" && (
            <button
              className="btn btn-bookmark"
              onClick={() => handleClick(id)}
            >
              <BsBookmark fontSize="2rem" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleArtilce;
