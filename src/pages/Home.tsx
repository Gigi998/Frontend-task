import React, { useEffect } from "react";
import { useNewsContext } from "../context/newsContext";
import { SingleArticle, Loading, ScrollWidget } from "../components";
import { allNewsUrl } from "../helpers/urls";

const Home = () => {
  const { news, newsLoading, fetchNews } = useNewsContext();

  useEffect(() => {
    fetchNews(allNewsUrl);
  }, []);

  if (newsLoading) {
    return <Loading />;
  }

  return (
    <div className="news-page">
      <h1 className="title">News</h1>
      <div className="articles-container">
        <ScrollWidget />
        {news.slice(0, 16).map((article) => {
          return <SingleArticle key={Math.random() * 10000} {...article} />;
        })}
      </div>
    </div>
  );
};

export default Home;
