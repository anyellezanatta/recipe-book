import { RecipeList } from "@/features/recipe/components/detail/RecipeList";
import { Screen } from "@/components/Screen";
import { FloatingButton } from "@/components/FloatingButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "@/navigators/AppNavigator";

type RecipeScreenProps = NativeStackScreenProps<AppStackParamList, "Recipes">;

export const RecipeScreen = ({ navigation }: RecipeScreenProps) => {
  useNavigation();
  return (
    <Screen>
      <RecipeList />
      <FloatingButton
        style={{ position: "absolute", right: 32, bottom: 32 }}
        onPress={() => {
          navigation.navigate("RecipeAdd");
        }}
      />
    </Screen>
  );
};
