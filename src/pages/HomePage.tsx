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
    state: {
      newsCategoryLoading,
      newsCategoryError,
      newsArray,
      query,
      filterArray,
    },
    getCurrentLocation,
  } = useNewsCategoryContext();
  const {
    state: { activeComp, isMobile },
  } = useMobileLayoutContext();

  const location = useLocation();

  useEffect(() => {
    getCurrentLocation(location.pathname);
  }, [location.pathname]);

  if (newsCategoryLoading) {
    return <Loading />;
  }

  if (newsCategoryError.error === true) {
    if (newsCategoryError.msg === "Request failed with status code 429") {
      return (
        <h2 className="fav-title">
          You run out of the requests, change the api key!
        </h2>
      );
    }
    return <h2 className="fav-title">{newsCategoryError.msg}</h2>;
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
