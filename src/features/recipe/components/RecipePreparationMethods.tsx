import { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import { useRecipe } from "../hooks/useRecipe";
import { Text } from "@/components/Text";
import { spacing } from "@/theme/spacing";

export type RecipePreparationMethodsProps = ViewProps;
export const RecipePreparationMethods: FC<RecipePreparationMethodsProps> = ({
  style: $styleOverride,
  ...props
}) => {
  const { recipe } = useRecipe();

  if (!recipe) return null;

  const $styles: StyleProp<ViewStyle> = [styles.container, $styleOverride];

  return (
    <View {...props} style={$styles}>
      <Text text="Instructions" size="sm" />
      {recipe.preparationMethods.map((method) => {
        return <Text key={method} text={`- ${method}`} size="xs" />;
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
