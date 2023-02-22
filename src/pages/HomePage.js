import React, { useEffect, useState } from "react";
import {
  Loading,
  ScrollWidget,
  SingleArticle,
  MobileNavigation,
} from "../components";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { useMobileLayoutContext } from "../context/mobileLayoutContext";
import { useMediaQuery } from "react-responsive";
import { urlCategory, api4 } from "../helpers/urls";
import { categoriesArray } from "../helpers/navLinks";
import { useLocation } from "react-router-dom";

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
    getCurrentLocation,
  } = useNewsCategoryContext();
  const { activeComp, setIsMobile, isMobile } = useMobileLayoutContext();

  const location = useLocation();

  useEffect(() => {
    getCurrentLocation(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    categoriesArray.forEach((cat) => {
      return fetchByCategory(urlCategory, cat, api4);
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
      {isMobile && <MobileNavigation />}
      <h1 className="title-page">News</h1>
      <div className="articles-container">
        {!isMobile && (
          <>
            {Articles} <ScrollWidget style={{ display: "block" }} />
          </>
        )}
        {isMobile && activeComp === "featured" && Articles}
        {isMobile && activeComp === "latest" && <ScrollWidget />}
      </div>
    </div>
  );
};

export default HomePage;
