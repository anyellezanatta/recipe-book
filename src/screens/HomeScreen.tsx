import { StyleSheet, View } from "react-native";
import { RecipeList } from "@/features/recipe/components/RecipeList";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <RecipeList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
