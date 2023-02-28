import React from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { Loading, CategoryPageComp } from "../components";

const Business = () => {
  const {
    state: { newsCategoryLoading, newsCategories, query, filterArray },
  } = useNewsCategoryContext();

  if (newsCategoryLoading) {
    return <Loading />;
  }

  return (
    <CategoryPageComp
      newsCategory={query === "" ? newsCategories.business : filterArray}
    />
  );
};

export default Business;
