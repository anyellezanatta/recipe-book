import { ReactNode, useCallback, useState } from "react";
import { Ingredient, Recipe } from "@/models";
import { RecipeAddContext } from "./RecipeAddContext";

type RecipeAddProviderProps = {
  recipe?: Partial<Recipe>;
  setRecipeValue?: (
    propertyName: keyof Recipe,
    propertyValue: Recipe[keyof Recipe],
  ) => void;
  addIngredient?: (ingredient: Ingredient) => void;
  addPreparationMethods?: (preparetionMethod: string) => void;
  children: ReactNode;
};
const initialRecipe: Partial<Recipe> = {
  ingredients: [],
  preparationMethods: [],
};

export const RecipeAddProvider = ({ children }: RecipeAddProviderProps) => {
  const [currentRecipe, setCurrentRecipe] =
    useState<Partial<Recipe>>(initialRecipe);

  const setRecipeValue = useCallback(
    (propertyName: keyof Recipe, propertyValue: Recipe[keyof Recipe]) => {
      return setCurrentRecipe({
        ...currentRecipe,
        [propertyName]: propertyValue,
      });
    },
    [currentRecipe],
  );

  const addIngredient = useCallback(
    (ingredient: Ingredient) => {
      setCurrentRecipe({
        ...currentRecipe,
        ingredients: [...currentRecipe.ingredients!, ingredient],
      });
    },
    [currentRecipe],
  );

  const addPreparationMethods = useCallback(
    (preparationMethod: string) => {
      setCurrentRecipe({
        ...currentRecipe,
        preparationMethods: [
          ...currentRecipe.preparationMethods!,
          preparationMethod,
        ],
      });
    },
    [currentRecipe],
  );

  return (
    <RecipeAddContext.Provider
      value={{
        recipe: currentRecipe,
        setRecipeValue,
        addIngredient,
        addPreparationMethods,
      }}>
      {children}
    </RecipeAddContext.Provider>
  );
};
