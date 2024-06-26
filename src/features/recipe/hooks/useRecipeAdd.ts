import { useContext } from "react";

import { RecipeAddContext } from "@/features/recipe/contexts/add/RecipeAddContext";

export const useRecipeAdd = () => {
  const context = useContext(RecipeAddContext);

  if (!context) {
    throw Error("useRecipeAdd must be used within RecipeAddContext");
  }

  return context;
};
