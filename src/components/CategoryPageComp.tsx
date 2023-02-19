import React, { useEffect } from "react";
import { ScrollWidget, SingleArticle } from "../components";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { useLocation } from "react-router-dom";
import { categoriesArray } from "../helpers/navLinks";
import { urlCategory, api3 } from "../helpers/urls";

const CategoryPageComp = ({ newsCategory }) => {
  const {
    getCurrentLocation,
    fetchByCategory,
    newsSport,
    newsScience,
    newsGeneral,
    newsTech,
    newsBusiness,
    getNewsArray,
    sortLatestNews,
  } = useNewsCategoryContext();

  const location = useLocation();

  useEffect(() => {
    getCurrentLocation(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    categoriesArray.forEach((cat) => {
      return fetchByCategory(urlCategory, cat, api3);
    });
    // fetchByCategory(urlCategory, location.pathname.slice(1), api3);
  }, []);

  useEffect(() => {
    getNewsArray();
  }, [
    newsSport,
    newsScience,
    newsGeneral,
    newsScience,
    newsBusiness,
    newsTech,
  ]);

  useEffect(() => {
    sortLatestNews();
  }, [
    newsSport,
    newsScience,
    newsGeneral,
    newsScience,
    newsBusiness,
    newsTech,
  ]);

  return (
    <div className="news-page">
      <h1 className="title">
        {location.pathname === "/"
          ? "news"
          : newsCategory.slice(0, 1).map((item) => item.category)}
      </h1>
      <div className="articles-container">
        {location.pathname === "/" && <ScrollWidget />}
        {newsCategory
          .slice(0, location.pathname === "/" ? 16 : 18)
          .map((article) => {
            return <SingleArticle key={Math.random() * 10000} {...article} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPageComp;
