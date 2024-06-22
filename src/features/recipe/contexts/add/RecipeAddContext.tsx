import { createContext } from "react";

import { Ingredient, Recipe } from "@/models";

type RecipeAddContextType = {
  recipe: Partial<Recipe>;
  setRecipeValue?: (
    propertyName: keyof Recipe,
    propertyValue: Recipe[keyof Recipe],
  ) => void;
  addIngredient?: (ingredient: Ingredient) => void;
  addPreparationMethods?: (preparationMethod: string) => void;
  saveRecipe: () => void;
};

export const RecipeAddContext = createContext<RecipeAddContextType | null>(
  null,
);
