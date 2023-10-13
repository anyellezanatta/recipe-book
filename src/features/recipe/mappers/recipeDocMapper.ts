import { DifficultyType, Ingredient, Recipe } from "@/models";
import { RecipeDoc } from "@/services/firebase/firebaseClient.types";

export const recipeDocMapper = (recipeDoc: RecipeDoc): Recipe => {
  return {
    key: recipeDoc.key,
    description: recipeDoc.description,
    favorite: recipeDoc.favorite,
    imageUrl: recipeDoc.image_url,
    tips: recipeDoc.tips,
    title: recipeDoc.title,
    yields: recipeDoc.yields,
    userId: recipeDoc.user_id,
    difficulty: recipeDoc.difficulty as DifficultyType,
    preparationTime: recipeDoc.preparation_time,
    ingredients: recipeDoc.ingredients as Ingredient[],
    preparationMethods: recipeDoc.preparation_method,
  };
};
