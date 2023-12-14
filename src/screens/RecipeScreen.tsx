import { StyleSheet, View } from "react-native";
import { RecipeList } from "@/features/recipe/components/RecipeList";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FloatingButton } from "@/components/FloatingButton";

export const RecipeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <RecipeList />
      <FloatingButton
        onPress={() => {
          console.log("clicou");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
