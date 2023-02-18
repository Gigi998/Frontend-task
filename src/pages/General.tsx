import React, { useEffect } from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { CategoryPageComp, Loading } from "../components";
import { urlCategory, api3 } from "../helpers/urls";

const General = () => {
  const { newsCategoryLoading, newsGeneral, fetchByCategory } =
    useNewsCategoryContext();

  if (newsCategoryLoading) {
    return <Loading />;
  }

  return <CategoryPageComp newsCategory={newsGeneral} />;
};

export default General;
