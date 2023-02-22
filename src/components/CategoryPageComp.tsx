import React, { useEffect } from "react";
import { SingleArticle } from "../components";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { useLocation } from "react-router-dom";
import { categoriesArray } from "../helpers/navLinks";
import { urlCategory, api5 } from "../helpers/urls";

const CategoryPageComp = ({ newsCategory }) => {
  const {
    getCurrentLocation,
    fetchByCategory,
    newsSport,
    newsScience,
    newsGeneral,
    newsBusiness,
    newsHealth,
    newsTech,
    getNewsArray,
    sortLatestNews,
  } = useNewsCategoryContext();

  const location = useLocation();

  useEffect(() => {
    getCurrentLocation(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    categoriesArray.forEach((cat) => {
      return fetchByCategory(urlCategory, cat, api5);
    });
  }, []);

  useEffect(() => {
    getNewsArray();
  }, [newsSport, newsHealth, newsGeneral, newsScience, newsBusiness, newsTech]);

  useEffect(() => {
    sortLatestNews();
  }, [newsSport, newsHealth, newsGeneral, newsScience, newsBusiness, newsTech]);

  return (
    <div className="news-page">
      <h1 className="title-page">{location.pathname.slice(1)}</h1>
      <div className="articles-container">
        {newsCategory.slice(0, 18).map((article) => {
          return <SingleArticle key={Math.random() * 10000} {...article} />;
        })}
      </div>
    </div>
  );
};

export default CategoryPageComp;
