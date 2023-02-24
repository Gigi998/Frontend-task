import React, { useEffect } from "react";
import { SingleArticle, Loading } from "../components";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const CategoryPageComp = ({ newsCategory }) => {
  const { getCurrentLocation, newsCategoryLoading, newsCategoryError } =
    useNewsCategoryContext();

  const location = useLocation();

  useEffect(() => {
    getCurrentLocation(location.pathname);
  }, [location.pathname]);

  if (newsCategoryLoading) {
    return <Loading />;
  }

  // Error handling
  if (newsCategoryError.error === true) {
    if (newsCategoryError.msg === "Request failed with status code 429") {
      return (
        <h2 className="fav-title">
          You run out of the requests, change the api key!
        </h2>
      );
    }
    return <h2 className="fav-title">{newsCategoryError.msg}</h2>;
  }

  return (
    <div className="news-page">
      <h1 className="title-page">{location.pathname.slice(1)}</h1>
      <div className="articles-container">
        {newsCategory.slice(0, 18).map((article) => {
          return <SingleArticle key={uuidv4()} {...article} />;
        })}
      </div>
    </div>
  );
};

export default CategoryPageComp;
