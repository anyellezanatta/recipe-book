import { FC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Recipe } from "@/models";
import { spacing } from "@/theme/spacing";
import { Text } from "@/components/Text/Text";
import { ToggleIconButton } from "@/components/ToggleButton";
import { useFavoriteRecipe } from "@/features/recipe/hooks/useFavoriteRecipe";
import { Image } from "@/components/Image";
import { useAuth } from "@/features/authentication/hooks/useAuth";
import { UserImage } from "@/components/UserImage";
import { useAppTheme } from "@/hooks/useAppTheme";

export const RecipeCell: FC<{
  item: Recipe;
  onPress?: (id: string) => void;
}> = ({ item, onPress }) => {
  const { user } = useAuth();
  const { colors } = useAppTheme();
  const { toggleFavorite } = useFavoriteRecipe(item.key, item.favorite);

  return (
    <TouchableOpacity onPress={() => onPress?.(item.key)}>
      <View style={styles.container}>
        <Image source={{ uri: item.imageUrl }} />
        <View style={styles.titleContainer}>
          <UserImage source={{ uri: user?.photoURL! }} />
          <View style={styles.subTitleContainer}>
            <Text size="md" text={item.title} />
            <Text
              style={{ color: colors.secondaryText }}
              size="xs"
              text={`by ${user?.displayName!}`}
            />
            <View style={styles.buttonsContainer}>
              <ToggleIconButton
                icon="heart"
                toggled={item.favorite}
                onToggleChanged={toggleFavorite}
              />
              <ToggleIconButton icon="share" toggled={false} />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing.medium,
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.medium,
  },
  subTitleContainer: {
    flex: 1,
    gap: 4,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "space-around",
  },
});
