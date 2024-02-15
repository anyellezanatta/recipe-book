import { FC } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { Text } from "@/components/Text";
import { useRecipeAdd } from "@/features/recipe/hooks/useRecipeAdd";
import { IconButton } from "@/components/IconButton";
import { RecipePreparationMethodAddListItem } from "./RecipePreparationMethodAddListItem";
import { RecipeIngredientAddListItem } from "./RecipeIngredientAddListItem";
import { spacing } from "@/theme/spacing";

export type RecipeAddListProps = ViewProps & {
  onAddPress: () => void;
  listType: "ingredients" | "preparationMethods";
};

export const RecipeAddList: FC<RecipeAddListProps> = ({
  style,
  onAddPress,
  listType,
  ...props
}) => {
  const { recipe } = useRecipeAdd();

  if (!recipe) return null;

  const title =
    listType === "ingredients" ? "Ingredients" : "Preparation methods";

  const renderItems = () => {
    switch (listType) {
      case "ingredients": {
        return recipe.ingredients?.map((item, index) => {
          return <RecipeIngredientAddListItem key={index} item={item} />;
        });
      }

      case "preparationMethods":
        return recipe.preparationMethods?.map((item, index) => {
          return (
            <RecipePreparationMethodAddListItem
              key={index}
              item={item}
              index={index}
            />
          );
        });
    }
  };

  return (
    <View {...props} style={[style, styles.container]}>
      <View style={styles.containerTitle}>
        <Text text={title} size={"sm"} />
        <IconButton icon={"add"} onPress={onAddPress} />
      </View>
      {renderItems()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing.extraSmall,
    paddingTop: spacing.small,
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    flexDirection: "row",
    gap: 4,
  },
});
