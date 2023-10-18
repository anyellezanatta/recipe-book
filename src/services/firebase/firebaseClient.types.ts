export type WithKey = {
  key: string;
};

export type IngredientDoc = WithKey & {
  name: string;
  quantity: number;
  unit: string;
};

export type RecipeDoc = WithKey & {
  description: string;
  imageUrl: string;
  tips: string;
  title: string;
  yields: number;
  userId: string;
  favorite: boolean;
  preparationTime: number;
  difficulty: string;
  ingredients: IngredientDoc[];
  preparationMethods: string[];
};
