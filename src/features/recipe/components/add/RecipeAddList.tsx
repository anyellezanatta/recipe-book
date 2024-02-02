import { FC } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";
import { Text } from "@/components/Text";
import { spacing } from "@/theme/spacing";
import { Separator } from "@/components/Separator";
import { useRecipeAdd } from "@/features/recipe/hooks/useRecipeAdd";
import { IconButton } from "@/components/IconButton";
import { Ingredient } from "@/models";
import { RecipePreparationMethodAddListItem } from "./RecipePreparationMethodAddListItem";
import { RecipeIngredientAddListItem } from "./RecipeIngredientAddListItem";

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

  const renderItem = ({
    item,
    index,
  }: ListRenderItemInfo<Ingredient | string>) => {
    switch (listType) {
      case "ingredients":
        return <RecipeIngredientAddListItem item={item as Ingredient} />;

      case "preparationMethods":
        return (
          <RecipePreparationMethodAddListItem
            item={item as string}
            index={index}
          />
        );
    }
  };

  return (
    <View {...props} style={[style, styles.container]}>
      <View style={styles.containerTitle}>
        <Text text={title} size={"md"} />
        <IconButton icon={"add"} onPress={onAddPress} />
      </View>
      <FlatList<Ingredient | string>
        data={
          listType === "ingredients"
            ? recipe.ingredients ?? []
            : recipe.preparationMethods ?? []
        }
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: spacing.extraSmall,
          paddingBottom: spacing.huge,
        }}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
