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
  image_url: string;
  tips: string;
  title: string;
  yields: number;
  user_id: string;
  favorite: boolean;
  preparation_time: number;
  difficulty: string;
  ingredients: IngredientDoc[];
  preparation_method: string[];
};
