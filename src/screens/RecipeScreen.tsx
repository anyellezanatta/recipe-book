import { StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RoundButton } from "@/components/RoundButton";
import { Screen } from "@/components/Screen";
import { RecipeList } from "@/features/recipe/components/list/RecipeList";
import { AppStackParamList } from "@/navigators/AppNavigator";

type RecipeScreenProps = NativeStackScreenProps<AppStackParamList, "Recipes">;

export const RecipeScreen = ({ navigation }: RecipeScreenProps) => {
  useNavigation();
  return (
    <Screen>
      <RecipeList />
      <RoundButton
        style={styles.roundButton}
        onPress={() => {
          navigation.navigate("RecipeAdd");
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  roundButton: {
    position: "absolute",
    right: 32,
    bottom: 32,
  },
});
