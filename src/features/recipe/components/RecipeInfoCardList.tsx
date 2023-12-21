import { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import { useRecipe } from "@/features/recipe/hooks/useRecipe";
import { RecipeInfoCard } from "./RecipeInfoCard";
import { RecipeInfo } from "./types";

export type RecipeInfoCardListProps = ViewProps;

export const RecipeInfoCardList: FC<RecipeInfoCardListProps> = ({
  style: $styleOverride,
  ...props
}) => {
  const { recipe } = useRecipe();

  if (!recipe) return null;

  const items: RecipeInfo[] = [
    { type: "yields", amount: recipe.yields },
    { type: "time", duration: recipe.preparationTime },
    { type: "difficulty", difficulty: recipe.difficulty },
  ];

  const $styles: StyleProp<ViewStyle> = [styles.container, $styleOverride];

  return (
    <View {...props} style={$styles}>
      {items.map((item) => {
        return <RecipeInfoCard key={item.type} info={item} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
