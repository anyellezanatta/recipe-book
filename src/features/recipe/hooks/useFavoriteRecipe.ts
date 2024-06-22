import { useCallback } from "react";

import auth from "@react-native-firebase/auth";

import { useUpdateDocument } from "@/hooks/useUpdateDocument";

export const useFavoriteRecipe = (recipeId: string, favorite: boolean) => {
  const mutation = useUpdateDocument("recipes", recipeId);
  const userId = auth().currentUser?.uid;

  const toggleFavorite = useCallback(() => {
    mutation.mutate({ favorite: !favorite, userId: userId });
  }, [favorite, mutation, userId]);

  return { toggleFavorite };
};
