import { Recipe } from "@/models";
import { createContext } from "react";

type RecipeContextType = {
  recipe?: Recipe;
};
export const RecipeContext = createContext<RecipeContextType | null>(null);
