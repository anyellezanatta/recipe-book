export const Units = [
  "kg",
  "g",
  "ml",
  "l",
  "oz",
  "teaspoon",
  "tablespoon",
  "cup",
] as const;

type Unit = (typeof Units)[number];

export type Ingredient = {
  name: string;
  quantity: number;
  unit: Unit;
};

export type PreparationMethod = {
  description: string;
  order: number;
};

export type Recipe = {
  description: string;
  imageUrl: string;
  tips: string;
  title: string;
  yields: string;
  favorite: boolean;
};
