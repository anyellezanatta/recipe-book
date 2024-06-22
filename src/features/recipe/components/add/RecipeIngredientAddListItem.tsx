import { FC } from "react";

import { Text, TextProps } from "@/components/Text";
import { Ingredient } from "@/models";

export type RecipeIngredientAddListItemProps = Omit<TextProps, "size"> & {
  item: Ingredient;
};

export const RecipeIngredientAddListItem: FC<
  RecipeIngredientAddListItemProps
> = ({ item }) => {
  return (
    <Text text={`-  ${item.quantity} ${item.unit} ${item.name}`} size="xs" />
  );
};
