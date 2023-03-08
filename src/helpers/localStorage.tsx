export type NewsArrayType = {
  author: string;
  title: string;
  description: null | string;
  urlToImage: null | string;
  publishedAt: string;
  category: string;
  id: string;
  inFavorites: boolean;
};

export const saveFavToLocStor = (items: NewsArrayType[]) => {
  localStorage.setItem("items", JSON.stringify(items));
};

export const getFromLocStor = () => {
  const result = localStorage.getItem("items");
  return result ? JSON.parse(result) : [];
};
