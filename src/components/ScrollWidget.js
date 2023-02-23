import React, { useState, useRef, useCallback } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import useFetchInfinite from "../hooks/useFetchInfinite";
import { formatTime } from "../helpers/formatTime";

const ScrollWidget = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, hasMore, newsList } = useFetchInfinite(pageNumber);

  const observer = useRef();

  // Checking if is interesecting
  const lastElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="scroll-container">
      <div className="title-container">
        <span className="dot"></span>
        <span className="inner-dot"></span>
        <h2 className="main-title">Latest news</h2>
      </div>
      <div className="content">
        {newsList.map((n, index) => {
          const { title, publishedAt } = n;
          if (newsList.length === index + 1) {
            return (
              <div className="single-news" key={index}>
                <h1 ref={lastElement}>{formatTime(publishedAt)}</h1>
                <p>{title.length > 40 ? title.slice(0, 40) : `${title}...`}</p>
              </div>
            );
          } else {
            return (
              <div className="single-news" key={index}>
                <h1>{formatTime(publishedAt)}</h1>
                <p>{title.length > 40 ? title.slice(0, 40) : `${title}...`}</p>
              </div>
            );
          }
        })}
      </div>
      <button className="scroll-btn btn">
        See all news
        <MdArrowForwardIos className="icon" />
      </button>
    </div>
  );
};

export default ScrollWidget;
