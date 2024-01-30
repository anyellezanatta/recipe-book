import { FC } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";
import { Ingredient } from "@/models";
import { Text } from "@/components/Text";
import { spacing } from "@/theme/spacing";
import { Separator } from "@/components/Separator";
import { useRecipeAdd } from "@/features/recipe/hooks/useRecipeAdd";
import { IconButton } from "@/components/IconButton";

export type RecipeIngredientAddListProps = ViewProps & {
  onAddPress: () => void;
};

export const RecipeIngredientAddList: FC<RecipeIngredientAddListProps> = ({
  style,
  onAddPress,
  ...props
}) => {
  const { recipe } = useRecipeAdd();

  if (!recipe) return null;

  const renderItem = ({ item }: ListRenderItemInfo<Ingredient>) => {
    return (
      <View style={styles.item}>
        <Text text={"- " + item.quantity.toString()} size="sm" />
        <Text text={item.unit} size="sm" />
        <Text text={item.name} size="sm" />
      </View>
    );
  };

  return (
    <View {...props} style={[style, styles.container]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text text="Ingredients" size={"md"} />
        <IconButton icon={"add"} onPress={onAddPress} />
      </View>
      <FlatList
        data={recipe.ingredients}
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
  item: {
    flexDirection: "row",
    gap: 4,
  },
});
