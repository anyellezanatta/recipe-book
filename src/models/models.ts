export const Units = [
  "kg",
  "g",
  "g",
  "ml",
  "l",
  "oz",
  "teaspoon",
  "tablespoon",
  "cup",
  "unit",
] as const;

export type Unit = (typeof Units)[number];

export type DifficultyType = "easy" | "medium" | "hard";

export type Ingredient = {
  name: string;
  quantity: number;
  unit: Unit;
};

export type Recipe = {
  key: string;
  description: string;
  imageUrl: string;
  tips: string;
  title: string;
  yields: number;
  favorite: boolean;
  userId: string;
  preparationTime: number;
  difficulty: DifficultyType;
  ingredients: Ingredient[];
  preparationMethods: string[];
};
