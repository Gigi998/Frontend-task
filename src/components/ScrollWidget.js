import React, { useState, useRef, useCallback } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import useFetchInfinite from "../hooks/useFetchInfinite";

const ScrollWidget = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, hasMore, newsList } = useFetchInfinite(pageNumber);

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
      <h2>latest news</h2>
      <div className="scroll-content">
        {newsList.map((n, index) => {
          const { title, publishedAt } = n;
          if (newsList.length === index + 1) {
            return (
              <div ref={lastElement} key={Math.random() * 10000}>
                {title}
              </div>
            );
          } else {
            <div key={Math.random() * 10000}>{title}</div>;
          }
        })}
      </div>
      <button>
        See all news
        <MdArrowForwardIos />
      </button>
      ;
    </div>
  );
};

export default ScrollWidget;
