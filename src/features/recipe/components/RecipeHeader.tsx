import { useRecipe } from "../hooks/useRecipe";
import { RecipeInfoCardList } from "./RecipeInfoCardList";
import { Text } from "@/components/Text";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { ViewProps } from "react-native";
import { FC } from "react";
import { StyleProp } from "react-native";
import { ViewStyle } from "react-native";
import { Image } from "@/components/Image";

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
