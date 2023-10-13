import { DifficultyType } from "@/models";

export type RecipeYields = {
  type: "yields";
  amount: number;
};

export type RecipePreparationTime = {
  type: "time";
  duration: number;
};

export type RecipeDifficulty = {
  type: "difficulty";
  difficulty: DifficultyType;
};

export type RecipeInfo =
  | RecipeYields
  | RecipePreparationTime
  | RecipeDifficulty;
