import React, { useEffect } from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { Loading, CategoryPageComp } from "../components";

const Technology = () => {
  const { newsCategoryLoading, newsTech, query, filterArray } =
    useNewsCategoryContext();

  if (newsCategoryLoading) {
    return <Loading />;
  }

  return (
    <CategoryPageComp newsCategory={query === "" ? newsTech : filterArray} />
  );
};

export default Technology;
