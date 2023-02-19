import React, { useEffect } from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { Loading, CategoryPageComp } from "../components";

const Health = () => {
  const { newsCategoryLoading, newsHealth, query, filterArray } =
    useNewsCategoryContext();

  if (newsCategoryLoading) {
    return <Loading />;
  }

  return (
    <CategoryPageComp newsCategory={query === "" ? newsHealth : filterArray} />
  );
};

export default Health;
