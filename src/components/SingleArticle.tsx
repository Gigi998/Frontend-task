import React from "react";
import DefaultImg from "../assets/img/NoImage.jpg";
import { BsBookmark } from "react-icons/bs";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import Close from "../assets/img/Close.svg";

type SingleArticleProps = {
  author: string;
  title: string;
  urlToImage: null | string;
  category: string;
  id: string;
};

const SingleArtilce = ({
  author,
  title,
  urlToImage,
  category,
  id,
}: SingleArticleProps) => {
  const {
    addToFavorites,
    removeFromFavorites,
    state: { favoritesArray, currentLocation },
  } = useNewsCategoryContext();

  // Check if item is already in favorites array
  const handleClick = (title: string) => {
    if (favoritesArray.length === 0) {
      addToFavorites(title);
    } else {
      let isInArr;
      // isInArr = favoritesArray.find((item) => item.id === id);
      isInArr = favoritesArray.find((item) => item.title === title);
      if (!isInArr) {
        addToFavorites(title);
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
        <img src={urlToImage} alt="no img" />
      )}
      <div className="info-container">
        <h2 className="category">
          {category === "technology" ? "tech" : category}
        </h2>
        <h2 className="title">
          {title.length > 60 ? `${title.slice(0, 50)}...` : title}
        </h2>
        <div className="bottom">
          <h2 className="author">
            {author === null || author === "" ? "unknown" : author}
          </h2>
          {currentLocation === "/favorites" ? (
            <button
              className="fav-icon"
              onClick={() => removeFromFavorites(id)}
            >
              <img src={Close} alt="x" />
            </button>
          ) : (
            <button
              className="btn btn-bookmark"
              onClick={() => handleClick(title)}
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
