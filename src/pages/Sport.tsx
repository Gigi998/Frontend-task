import React from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { Loading, CategoryPageComp } from "../components";

const Sports = () => {
  const {
    state: { newsCategoryLoading, query, filterArray, newsCategories },
  } = useNewsCategoryContext();

  if (newsCategoryLoading) {
    return <Loading />;
  }

  return (
    <CategoryPageComp
      newsCategory={query === "" ? newsCategories.sport : filterArray}
    />
  );
};

export default Sports;
