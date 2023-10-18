import { DifficultyType, Ingredient, Recipe } from "@/models";
import { RecipeDoc } from "@/services/firebase/firebaseClient.types";

export const recipeDocMapper = (recipeDoc: RecipeDoc): Recipe => {
  return {
    key: recipeDoc.key,
    description: recipeDoc.description,
    favorite: recipeDoc.favorite,
    imageUrl: recipeDoc.imageUrl,
    tips: recipeDoc.tips,
    title: recipeDoc.title,
    yields: recipeDoc.yields,
    userId: recipeDoc.userId,
    difficulty: recipeDoc.difficulty as DifficultyType,
    preparationTime: recipeDoc.preparationTime,
    ingredients: recipeDoc.ingredients as Ingredient[],
    preparationMethods: recipeDoc.preparationMethods,
  };
};

export const recipeMapper = (recipe: Recipe): RecipeDoc => {
  return {
    key: recipe.key,
    description: recipe.description,
    favorite: recipe.favorite,
    imageUrl: recipe.imageUrl,
    tips: recipe.tips,
    title: recipe.title,
    yields: recipe.yields,
    userId: recipe.userId,
    difficulty: recipe.difficulty,
    preparationTime: recipe.preparationTime,
    ingredients: recipe.ingredients,
    preparationMethods: recipe.preparationMethods,
  };
};
