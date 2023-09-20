import { FlatList, StyleSheet, Text, View } from "react-native";
import { useReactQuerySubscription } from "@/hooks/useReactQuerySubscription";
import { Recipe } from "@/models";
import { RecipeDoc } from "@/services/firebase/firebaseClient.types";

export const HomeScreen = () => {
  const { data, isLoading } = useReactQuerySubscription<Recipe, RecipeDoc>(
    "recipes",
    (doc) => ({
      ...doc,
    }),
  );

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
