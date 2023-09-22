export type WithKey = {
  key: string;
};

export type IngredientDoc = WithKey & {
  name: string;
  quantity: number;
  unit: string;
};

export type PreparationMethodDoc = WithKey & {
  description: string;
  order: number;
};

export type RecipeDoc = WithKey & {
  description: string;
  image_url: string;
  tips: string;
  title: string;
  yields: string;
  user_id: string;
  favorite: boolean;
};
