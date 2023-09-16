import { FlatList, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FirebaseClient } from "@/services/firebase/firebaseClient";
import { Recipe } from "@/services/firebase/firebaseClient.types";

export const HomeScreen = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    FirebaseClient.singInWithGoogle();
    const unsubscribe = FirebaseClient.subscribeToCollection(
      "/recipes",
      (doc) => ({ ...doc } as Recipe),
      (response) => setRecipes(response)
    );
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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
    backgroundColor: "#fff",
  },
});
