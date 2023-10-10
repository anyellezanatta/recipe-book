import { ReactNode } from "react";
import { Recipe } from "@/models";
import { RecipeContext } from "./RecipeContext";

type RecipeProviderProps = {
  recipe?: Recipe;
  children: ReactNode;
};

export const RecipeProvider = ({ recipe, children }: RecipeProviderProps) => {
  return (
    <RecipeContext.Provider value={{ recipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
