import React from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { CategoryPageComp, Loading } from "../components";

const General = () => {
  const {
    state: { newsCategoryLoading, query, filterArray, newsCategories },
  } = useNewsCategoryContext();

  if (newsCategoryLoading) {
    return <Loading />;
  }

  return (
    <CategoryPageComp
      newsCategory={query === "" ? newsCategories.general : filterArray}
    />
  );
};

export default General;
