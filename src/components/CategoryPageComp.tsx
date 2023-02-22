import React, { useEffect } from "react";
import { SingleArticle } from "../components";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { useLocation } from "react-router-dom";
import { categoriesArray } from "../helpers/navLinks";
import { urlCategory, api2 } from "../helpers/urls";
import { v4 as uuidv4 } from "uuid";

const CategoryPageComp = ({ newsCategory }) => {
  const {
    getCurrentLocation,
    fetchByCategory,
    getNewsArray,
    sortLatestNews,
    newsCategories,
  } = useNewsCategoryContext();

  const location = useLocation();

  useEffect(() => {
    getCurrentLocation(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    categoriesArray.forEach((cat) => {
      return fetchByCategory(urlCategory, cat, api2);
    });
  }, []);

  useEffect(() => {
    getNewsArray();
    sortLatestNews();
  }, [newsCategories]);

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
