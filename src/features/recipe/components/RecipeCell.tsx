import { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Recipe } from "@/models";
import { spacing } from "@/theme/spacing";

export const RecipeCell: FC<{ item: Recipe }> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: spacing.medium,
  },
  text: {
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: spacing.medium,
  },
});
