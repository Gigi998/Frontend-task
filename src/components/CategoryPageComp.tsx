import React from "react";
import { SingleArticle } from "../components";
import { useNewsCategoryContext } from "../context/newsCategoryContext";

const CategoryPageComp = ({ category, newsCategory }) => {
  return (
    <div className="news-page">
      <h1 className="title">{category}</h1>
      <div className="articles-container">
        {newsCategory.slice(0, 18).map((article) => {
          return <SingleArticle key={Math.random() * 10000} {...article} />;
        })}
      </div>
    </div>
  );
};

export default CategoryPageComp;
