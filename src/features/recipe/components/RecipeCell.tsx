import { FC } from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { Recipe } from "@/models";
import { spacing } from "@/theme/spacing";
import { Text } from "@/components/Text/Text";
import { ToggleIconButton } from "@/components/ToggleButton";
import { useFavoriteRecipe } from "../hooks/useFavoriteRecipe";
import { useAppTheme } from "@/hooks/useAppTheme";
import { Image } from "@/components/Image";

export const RecipeCell: FC<{
  item: Recipe;
  onPress?: (id: string) => void;
}> = ({ item, onPress }) => {
  const { toggleFavorite } = useFavoriteRecipe(item.key, item.favorite);
  const { colors } = useAppTheme();

  return (
    <TouchableHighlight
      underlayColor={colors.border}
      onPress={() => onPress?.(item.key)}>
      <View style={styles.container}>
        <Image source={{ uri: item.imageUrl }} />
        <Text size="sm" text={item.title} />
        <ToggleIconButton
          icon="heart"
          toggled={item.favorite}
          onToggleChanged={toggleFavorite}
        />
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: spacing.medium,
  },
});
