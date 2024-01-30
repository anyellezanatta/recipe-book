import { FC } from "react";
import {
  View,
  ViewProps,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useRecipe } from "@/features/recipe/hooks/useRecipe";
import { Text } from "@/components/Text";
import { Image } from "@/components/Image";
import { RecipeInfoCardList } from "./RecipeInfoCardList";

export type RecipeHeaderProps = ViewProps;

export const RecipeHeader: FC<RecipeHeaderProps> = ({
  style: $styleOverride,
  ...props
}) => {
  const { recipe } = useRecipe();

  if (!recipe) return null;

  const $styles: StyleProp<ViewStyle> = [styles.container, $styleOverride];

  return (
    <View {...props} style={$styles}>
      <Image source={{ uri: recipe.imageUrl }} />
      <Text size="lg">{recipe.title}</Text>
      <RecipeInfoCardList />
      <Text size="md">Overview</Text>
      <Text size="sm">{recipe.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});
