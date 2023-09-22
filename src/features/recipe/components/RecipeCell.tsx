import { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Recipe } from "@/models";

export const RecipeCell: FC<{ item: Recipe }> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.imageUrl }}
        style={{ aspectRatio: 1, flex: 1 }}
      />
      <Text>{item.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    minHeight: 180,
    padding: 1.5, //spacing.medium,
    columnGap: 1.5, //spacing.medium,
  },
});
