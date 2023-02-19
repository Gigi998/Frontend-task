import React from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { Loading, CategoryPageComp } from "../components";

const Business = () => {
  const { newsCategoryLoading, newsBusiness, query, filterArray } =
    useNewsCategoryContext();

  if (newsCategoryLoading) {
    return <Loading />;
  }

  return (
    <CategoryPageComp
      newsCategory={query === "" ? newsBusiness : filterArray}
    />
  );
};

export default Business;
