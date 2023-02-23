import React from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { Loading, CategoryPageComp } from "../components";

const Technology = () => {
  const { newsCategoryLoading, query, filterArray, newsCategories } =
    useNewsCategoryContext();

  if (newsCategoryLoading) {
    return <Loading />;
  }

  return (
    <CategoryPageComp
      newsCategory={query === "" ? newsCategories.technology : filterArray}
    />
  );
};

export default Technology;
