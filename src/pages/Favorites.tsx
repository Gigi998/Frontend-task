import React, { useEffect } from "react";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { CategoryPageComp } from "../components";
import { saveFavToLocStor } from "../helpers/localStorage";

const Favorites = () => {
  const {
    state: { favoritesArray, query, filterArray },
  } = useNewsCategoryContext();

  useEffect(() => {
    saveFavToLocStor(favoritesArray);
  }, [favoritesArray]);

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
