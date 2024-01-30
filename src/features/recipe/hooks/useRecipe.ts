import { useContext } from "react";
import { RecipeContext } from "../contexts/detail/RecipeContext";

export const useRecipe = () => {
  const context = useContext(RecipeContext);

  if (!context) {
    throw Error("useRecipe must be used within RecipeContext");
  }

  return context;
};
