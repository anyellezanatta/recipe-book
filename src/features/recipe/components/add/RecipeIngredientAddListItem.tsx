import { FC } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { Ingredient } from "@/models";
import { Text } from "@/components/Text";

export type RecipeIngredientAddListItemProps = ViewProps & {
  item: Ingredient;
};

export const RecipeIngredientAddListItem: FC<
  RecipeIngredientAddListItemProps
> = ({ style, item, ...props }) => {
  return (
    <View {...props} style={[style, styles.container]}>
      <Text text={`-  ${item.quantity}`} size="sm" />
      <Text text={item.unit} size="sm" />
      <Text text={item.name} size="sm" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 4,
  },
});
