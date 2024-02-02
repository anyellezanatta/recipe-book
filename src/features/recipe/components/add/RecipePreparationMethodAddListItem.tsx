import { FC } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { Text } from "@/components/Text";

export type RecipePreparationMethodAddListItemProps = ViewProps & {
  item: string;
  index: number;
};

export const RecipePreparationMethodAddListItem: FC<
  RecipePreparationMethodAddListItemProps
> = ({ style, item, index, ...props }) => {
  return (
    <View {...props} style={[style, styles.container]}>
      <Text text={`${index + 1} - ${item}`} size="sm" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 4,
  },
});
