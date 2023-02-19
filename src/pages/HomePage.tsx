import React from "react";
import { Loading, CategoryPageComp } from "../components";
import { useNewsCategoryContext } from "../context/newsCategoryContext";

const HomePage = () => {
  const { newsCategoryLoading, newsArray, query, filterArray } =
    useNewsCategoryContext();

  if (newsCategoryLoading) {
    return <Loading />;
  }

  return (
    <CategoryPageComp newsCategory={query === "" ? newsArray : filterArray} />
  );
};

export default HomePage;
