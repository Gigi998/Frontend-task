import React, { useEffect } from "react";
import { SingleArticle } from "../components";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { useLocation } from "react-router-dom";

const CategoryPageComp = ({ newsCategory }) => {
  const { getCurrentLocation } = useNewsCategoryContext();

  const location = useLocation();

  useEffect(() => {
    getCurrentLocation(location.pathname);
  }, [location.pathname]);

  return (
    <div className="news-page">
      <h1 className="title">
        {newsCategory.slice(0, 1).map((item) => item.category)}
      </h1>
      <div className="articles-container">
        {newsCategory.slice(0, 18).map((article) => {
          return <SingleArticle key={Math.random() * 10000} {...article} />;
        })}
      </div>
    </div>
  );
};

export default CategoryPageComp;
