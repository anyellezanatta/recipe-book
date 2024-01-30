import { ListRenderItemInfo, StyleSheet, View, ViewProps } from "react-native";
import { Text } from "@/components/Text";
import { FlatList } from "react-native-gesture-handler";
import { spacing } from "@/theme/spacing";
import { Separator } from "@/components/Separator";
import { FC } from "react";
import { useRecipeAdd } from "../../hooks/useRecipeAdd";
import { IconButton } from "@/components/IconButton";

export type RecipePreparationMethodAddListProps = ViewProps & {
  onAddPress: () => void;
};

export const RecipePreparationMethodAddList: FC<
  RecipePreparationMethodAddListProps
> = ({ style, onAddPress, ...props }) => {
  const { recipe } = useRecipeAdd();

  if (!recipe) return null;

  const renderItem = ({ item, index }: ListRenderItemInfo<string>) => {
    return (
      <View style={styles.item}>
        <Text text={`${index + 1} - ${item}`} size="sm" />
      </View>
    );
  };

  return (
    <View {...props} style={[style, styles.container]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text text="Preparation Methods" size={"md"} />
        <IconButton icon={"add"} onPress={onAddPress} />
      </View>
      <FlatList
        data={recipe.preparationMethods}
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
