import { FC } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Recipe } from "@/models";
import { spacing } from "@/theme/spacing";
import { Text } from "@/components/Text/Text";
import { ToggleIconButton } from "@/components/ToggleButton";
import { useFavoriteList } from "../hooks/useFavoriteList";

export const RecipeCell: FC<{ item: Recipe }> = ({ item }) => {
  const { favorite, toggleFavorite } = useFavoriteList(item.key);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <Text size="sm" text={item.title} />
      <ToggleIconButton
        icon="heart"
        toggled={favorite}
        onToggleChanged={toggleFavorite}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: spacing.medium,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: spacing.medium,
  },
});
