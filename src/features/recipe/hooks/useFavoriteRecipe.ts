import { useCallback } from "react";
import { useUpdateDocument } from "@/hooks/useUpdateDocument";
import auth from "@react-native-firebase/auth";

export const useFavoriteRecipe = (recipeId: string, favorite: boolean) => {
  const mutation = useUpdateDocument("recipes", recipeId);
  const userId = auth().currentUser?.uid;

  const toggleFavorite = useCallback(() => {
    mutation.mutate({ favorite: !favorite, userId: userId });
  }, [favorite, mutation, userId]);

  return { toggleFavorite };
};
