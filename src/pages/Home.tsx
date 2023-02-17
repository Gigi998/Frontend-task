import React, { useEffect } from "react";
import { SingleArticle, Loading, ScrollWidget } from "../components";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { urlCategory, api6 } from "../helpers/urls";
import { categoriesArray } from "../helpers/categories";

const Home = () => {
  const {
    fetchByCategory,
    newsCategoryLoading,
    newsArray,
    clearOldNews,
    sortLatestNews,
    getNewsArray,
  } = useNewsCategoryContext();

  useEffect(() => {
    clearOldNews();
    categoriesArray.forEach((cat) => {
      return fetchByCategory(urlCategory, cat, api6);
    });
    getNewsArray();
  }, []);

  useEffect(() => {
    sortLatestNews();
  }, [newsArray]);

  if (newsCategoryLoading) {
    return <Loading />;
  }

  return (
    <div className="news-page">
      <h1 className="title">News</h1>
      <div className="articles-container">
        {/* <ScrollWidget /> */}
        {newsArray.slice(0, 16).map((article) => {
          return <SingleArticle key={Math.random() * 10000} {...article} />;
        })}
      </div>
    </div>
  );
};

export default Home;
