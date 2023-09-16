import { Recipe } from "@/models";
import { FirebaseClient } from "@/services/firebase/firebaseClient";
import { RecipeDoc } from "@/services/firebase/firebaseClient.types";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export const HomeScreen = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    return FirebaseClient.subscribeToCollection<Recipe, RecipeDoc>(
      "recipes",
      (doc) => {
        return { ...doc };
      },
      (data) => setRecipes(data),
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
