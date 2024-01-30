import { FC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Recipe } from "@/models";
import { spacing } from "@/theme/spacing";
import { Text } from "@/components/Text/Text";
import { ToggleIconButton } from "@/components/ToggleButton";
import { useFavoriteRecipe } from "@/features/recipe/hooks/useFavoriteRecipe";
import { Image } from "@/components/Image";

export const RecipeCell: FC<{
  item: Recipe;
  onPress?: (id: string) => void;
}> = ({ item, onPress }) => {
  const { toggleFavorite } = useFavoriteRecipe(item.key, item.favorite);

  return (
    <TouchableOpacity onPress={() => onPress?.(item.key)}>
      <View style={styles.container}>
        <Image source={{ uri: item.imageUrl }} />
        <Text size="sm" text={item.title} />
        <ToggleIconButton
          icon="heart"
          toggled={item.favorite}
          onToggleChanged={toggleFavorite}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing.medium,
  },
});
