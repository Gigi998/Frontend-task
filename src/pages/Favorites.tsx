import React from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { Loading, CategoryPageComp } from "../components";

const Favorites = () => {
  const { favoritesArray, query, filterArray } = useNewsCategoryContext();

  if (favoritesArray.length === 0) {
    return <h2 className="fav-title">Nothing added yet!</h2>;
  }

  return (
    <CategoryPageComp
      newsCategory={query === "" ? favoritesArray : filterArray}
    />
  );
};

export default Favorites;
