import React, { useEffect } from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { Loading, CategoryPageComp } from "../components";

const Science = () => {
  const { category, newsCategoryLoading, newsScience, query, filterArray } =
    useNewsCategoryContext();

  if (newsCategoryLoading) {
    return <Loading />;
  }

  return (
    <CategoryPageComp newsCategory={query === "" ? newsScience : filterArray} />
  );
};

export default Science;
