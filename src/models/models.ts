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

export type Unit = (typeof Units)[number];

export type Ingredient = {
  key: string;
  name: string;
  quantity: number;
  unit: Unit;
};

export type PreparationMethod = {
  key: string;
  description: string;
  order: number;
};

export type Recipe = {
  key: string;
  description: string;
  imageUrl: string;
  tips: string;
  title: string;
  yields: string;
  favorite: boolean;
  userId: string;
};
