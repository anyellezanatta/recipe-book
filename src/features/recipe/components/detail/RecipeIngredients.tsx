import { FC } from "react";
import { StyleSheet, View, ViewProps } from "react-native";

import { Text } from "@/components/Text";
import { useRecipe } from "@/features/recipe/hooks/useRecipe";
import { spacing } from "@/theme/spacing";

import { RecipeIngredient } from "./RecipeIngredient";

export type RecipeIngredientsProps = ViewProps;
export const RecipeIngredients: FC<RecipeIngredientsProps> = () => {
  const { recipe } = useRecipe();

  if (!recipe) return null;

  return (
    <View style={styles.container}>
      <Text text="Ingredients" size="sm" />
      {recipe.ingredients.map((ingredient) => {
        return (
          <RecipeIngredient
            key={ingredient.name + ingredient.quantity}
            name={ingredient.name}
            quantity={ingredient.quantity}
            unit={ingredient.unit}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.large,
    gap: 5,
  },
});
