import { RecipeList } from "@/features/recipe/components/RecipeList";
import { Screen } from "@/components/Screen";
import { FloatingButton } from "@/components/FloatingButton";

export const RecipeScreen = () => {
  return (
    <Screen>
      <RecipeList />
      <FloatingButton
        onPress={() => {
          console.log("clicou");
        }}
      />
    </Screen>
  );
};
