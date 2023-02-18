import React from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { Loading, CategoryPageComp } from "../components";

const Business = () => {
  const { newsCategoryLoading, newsBusiness } = useNewsCategoryContext();

  if (newsCategoryLoading) {
    return <Loading />;
  }

  return <CategoryPageComp newsCategory={newsBusiness} />;
};

export default Business;
