import React, { useEffect } from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { Loading, CategoryPageComp } from "../components";

const Technology = () => {
  const { category, newsCategoryLoading, newsTech } = useNewsCategoryContext();

  if (newsCategoryLoading) {
    return <Loading />;
  }

  return <CategoryPageComp category={category} newsCategory={newsTech} />;
};

export default Technology;
