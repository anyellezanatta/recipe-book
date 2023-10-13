import { FC } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { useRecipe } from "../hooks/useRecipe";
import { Text } from "@/components/Text";
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
