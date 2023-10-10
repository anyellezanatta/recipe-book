export type RecipeYields = {
  type: "yields";
  amount: number;
};

export type RecipePreparationTime = {
  type: "preparation";
  duration: number;
};

export type RecipeDifficulty = {
  type: "difficulty";
  dificulty: "easy" | "medium" | "hard";
};

export type RecipeInfo =
  | RecipeYields
  | RecipePreparationTime
  | RecipeDifficulty;
