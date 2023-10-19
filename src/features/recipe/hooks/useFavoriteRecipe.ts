import { useCallback } from "react";
import { useUpdateDocument } from "@/hooks/useUpdateDocument";

export const useFavoriteRecipe = (recipeId: string, favorite: boolean) => {
  const mutation = useUpdateDocument("recipes", recipeId);

  const toggleFavorite = useCallback(() => {
    mutation.mutate({ favorite: !favorite });
  }, [favorite, mutation]);

  return { toggleFavorite };
};
