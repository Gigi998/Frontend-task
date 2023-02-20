import React from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { Loading, CategoryPageComp } from "../components";

const Favorites = () => {
  const { favoritesArray, query, filterArray } = useNewsCategoryContext();

  return (
    <CategoryPageComp
      newsCategory={query === "" ? favoritesArray : filterArray}
    />
  );
};

export default Favorites;
