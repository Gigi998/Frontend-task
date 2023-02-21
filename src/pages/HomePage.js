import React, { useEffect, useState } from "react";
import {
  Loading,
  ScrollWidget,
  SingleArticle,
  MobileNavigation,
} from "../components";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { useMediaQuery } from "react-responsive";
import { urlCategory, api2 } from "../helpers/urls";
import { categoriesArray } from "../helpers/navLinks";

const HomePage = () => {
  const {
    newsCategoryLoading,
    newsArray,
    query,
    filterArray,
    fetchByCategory,
    getNewsArray,
    newsSport,
    newsScience,
    newsGeneral,
    newsBusiness,
    newsTech,
    sortLatestNews,
  } = useNewsCategoryContext();

  const isMobile = useMediaQuery({ maxWidth: 650 });
  const [activeComp, setActiveComp] = useState("featured");

  const handleClick = (component) => {
    setActiveComp(component);
  };

  useEffect(() => {
    categoriesArray.forEach((cat) => {
      return fetchByCategory(urlCategory, cat, api2);
    });
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

  if (newsCategoryLoading) {
    return <Loading />;
  }

  const Articles = (query === "" ? newsArray : filterArray)
    .slice(0, 16)
    .map((item) => {
      return <SingleArticle key={Math.random() * 10000} {...item} />;
    });

  return (
    <div className="news-page">
      {isMobile && <MobileNavigation handleClick={handleClick} />}
      <h1 className="title-page">News</h1>
      <div className="articles-container">
        {!isMobile && (
          <>
            {Articles} <ScrollWidget style={{ display: "block" }} />
          </>
        )}
        {isMobile && activeComp === "featured" && Articles}
        {isMobile && activeComp === "latest" && (
          <ScrollWidget style={{ display: "block" }} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
