import { createContext } from "react";

import { Recipe } from "@/models";

type RecipeContextType = {
  recipe?: Recipe;
};

export const RecipeContext = createContext<RecipeContextType | null>(null);
