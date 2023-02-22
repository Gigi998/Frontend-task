import React, { useEffect } from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { CategoryPageComp, Loading } from "../components";
import { urlCategory, api3 } from "../helpers/urls";

const General = () => {
  const { newsCategoryLoading, query, filterArray, newsCategories } =
    useNewsCategoryContext();

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
