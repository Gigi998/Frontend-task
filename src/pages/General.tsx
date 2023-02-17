import React, { useEffect } from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { CategoryPageComp, Loading } from "../components";

const General = () => {
  const { category, newsCategoryLoading, newsGeneral } =
    useNewsCategoryContext();

  if (newsCategoryLoading) {
    return <Loading />;
  }

  return <CategoryPageComp category={category} newsCategory={newsGeneral} />;
};

export default General;
