import { ReactNode, useCallback, useState } from "react";

import auth from "@react-native-firebase/auth";

import { useAddDocument } from "@/hooks/useAddDocument";
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
  saveRecipe?: () => void;
  children: ReactNode;
};

const initialRecipe: Partial<Recipe> = {
  favorite: false,
  tips: "",
  ingredients: [],
  preparationMethods: [],
};

export const RecipeAddProvider = ({ children }: RecipeAddProviderProps) => {
  const [currentRecipe, setCurrentRecipe] = useState<Partial<Recipe>>({
    ...initialRecipe,
    userId: auth().currentUser?.uid,
  });

  const setRecipeValue = useCallback(
    <TProp extends keyof Recipe>(
      propertyName: TProp,
      propertyValue: Recipe[TProp],
    ) => {
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

  const addDocument = useAddDocument<Recipe>("recipes");

  const saveRecipe = () => {
    console.log(currentRecipe);
    return addDocument.mutate(currentRecipe as Recipe);
  };

  return (
    <RecipeAddContext.Provider
      value={{
        recipe: currentRecipe,
        setRecipeValue,
        addIngredient,
        addPreparationMethods,
        saveRecipe,
      }}>
      {children}
    </RecipeAddContext.Provider>
  );
};
