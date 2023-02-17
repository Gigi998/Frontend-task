import React from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { Loading, CategoryPageComp } from "../components";

const Business = () => {
  const { category, newsCategoryLoading, newsBusiness } =
    useNewsCategoryContext();

  if (newsCategoryLoading) {
    return <Loading />;
  }

  return <CategoryPageComp category={category} newsCategory={newsBusiness} />;
};

export default Business;
