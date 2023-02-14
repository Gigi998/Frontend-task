import React from "react";
import { useNewsContext } from "../context/newsContext";
import { SingleArtilce } from "../components";

const Home = () => {
  const { news } = useNewsContext();
  return (
    <div className="news-page">
      <h1 className="title">News</h1>
      <div className="articles-container">
        {news.slice(0, 18).map((article) => {
          return <SingleArtilce key={Math.random() * 10000} {...article} />;
        })}
      </div>
    </div>
  );
};

export default Home;
