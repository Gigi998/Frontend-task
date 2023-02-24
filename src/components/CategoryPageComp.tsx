import React, { useEffect } from "react";
import { SingleArticle, Loading } from "../components";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const CategoryPageComp = ({ newsCategory }) => {
  const { getCurrentLocation, newsCategoryLoading } = useNewsCategoryContext();

  const location = useLocation();

  useEffect(() => {
    getCurrentLocation(location.pathname);
  }, [location.pathname]);

  if (newsCategoryLoading) {
    return <Loading />;
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
