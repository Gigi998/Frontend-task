import React, { useEffect } from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { Loading, CategoryPageComp } from "../components";

const Health = () => {
  const { category, newsCategoryLoading, newsHealth } =
    useNewsCategoryContext();

  if (newsCategoryLoading) {
    return <Loading />;
  }

  return <CategoryPageComp category={category} newsCategory={newsHealth} />;
};

export default Health;
