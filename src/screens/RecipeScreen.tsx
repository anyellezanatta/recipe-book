import { RecipeList } from "@/features/recipe/components/list/RecipeList";
import { Screen } from "@/components/Screen";
import { RoundButton } from "@/components/RoundButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "@/navigators/AppNavigator";

type RecipeScreenProps = NativeStackScreenProps<AppStackParamList, "Recipes">;

export const RecipeScreen = ({ navigation }: RecipeScreenProps) => {
  useNavigation();
  return (
    <Screen>
      <RecipeList />
      <RoundButton
        style={{ position: "absolute", right: 32, bottom: 32 }}
        onPress={() => {
          navigation.navigate("RecipeAdd");
        }}
      />
    </Screen>
  );
};
