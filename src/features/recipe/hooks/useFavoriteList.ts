import { useState } from "react";

export const useFavoriteList = (recipeId: string) => {
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };
  return { favorite, toggleFavorite };
};
