import { Ingredient, Recipe } from "@/models";
import { createContext } from "react";

type RecipeAddContextType = {
  recipe: Partial<Recipe>;
  setRecipeValue?: (
    propertyName: keyof Recipe,
    propertyValue: Recipe[keyof Recipe],
  ) => void;
  addIngredient?: (ingredient: Ingredient) => void;
  addPreparationMethods?: (preparationMethod: string) => void;
};

export const RecipeAddContext = createContext<RecipeAddContextType | null>(
  null,
);
