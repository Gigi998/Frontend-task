import React, { useEffect } from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { Loading, CategoryPageComp } from "../components";
import { urlCategory } from "../helpers/urls";

// const api = "9370eb68c6004acd940c8644a2689e0c";
const api = "150934a1060e4e93939ce31724e99b59";
const Business = () => {
  const { fetchByCategory, category, newsCategoryLoading, newsCategory } =
    useNewsCategoryContext();

  useEffect(() => {
    fetchByCategory(urlCategory, category, api);
  }, []);

  if (newsCategoryLoading) {
    return <Loading />;
  }

  return <CategoryPageComp category={category} newsCategory={newsCategory} />;
};

export default Business;
