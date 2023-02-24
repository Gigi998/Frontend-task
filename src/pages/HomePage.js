import React, { useEffect } from "react";
import {
  Loading,
  ScrollWidget,
  SingleArticle,
  MobileNavigation,
} from "../components";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { useMobileLayoutContext } from "../context/mobileLayoutContext";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const HomePage = () => {
  const {
    newsCategoryLoading,
    newsArray,
    query,
    filterArray,
    getCurrentLocation,
  } = useNewsCategoryContext();
  const { activeComp, isMobile } = useMobileLayoutContext();

  const location = useLocation();

  useEffect(() => {
    getCurrentLocation(location.pathname);
  }, [location.pathname]);

  if (newsCategoryLoading) {
    return <Loading />;
  }

  // All articles array
  const Articles = (query === "" ? newsArray : filterArray)
    .slice(0, 16)
    .map((item) => {
      return <SingleArticle key={uuidv4()} {...item} />;
    });

  return (
    <div className="news-page">
      {isMobile && <MobileNavigation />}
      <h1 className="title-page">News</h1>
      <div className="articles-container">
        {!isMobile && (
          <>
            {Articles} <ScrollWidget />
          </>
        )}
        {isMobile && activeComp === "featured" && Articles}
        {isMobile && activeComp === "latest" && <ScrollWidget />}
      </div>
    </div>
  );
};

export default HomePage;
