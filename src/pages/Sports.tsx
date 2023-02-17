import React, { useEffect } from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { Loading, CategoryPageComp } from "../components";

const Sports = () => {
  const { category, newsCategoryLoading, newsSport } = useNewsCategoryContext();

  if (newsCategoryLoading) {
    return <Loading />;
  }

  return <CategoryPageComp category={category} newsCategory={newsSport} />;
};

export default Sports;
