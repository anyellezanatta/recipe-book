import { StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDocumentQuery } from "@/hooks/useDocumentQuery";
import { Recipe } from "@/models";
import { AppStackParamList } from "@/navigators/AppNavigator";
import { RecipeDoc } from "@/services/firebase/firebaseClient.types";
import { spacing } from "@/theme/spacing";
import { FullScreenLoader } from "@/components/FullScreenLoader/FullScreenLoader";
import { RecipeProvider } from "@/features/recipe/contexts/RecipeProvider";
import { recipeDocMapper } from "@/features/recipe/mappers/recipeDocMapper";
import { RecipeHeader } from "@/features/recipe/components/RecipeHeader";
import { RecipeIngredients } from "@/features/recipe/components/RecipeIngredients";
import { RecipePreparationMethods } from "@/features/recipe/components/RecipePreparationMethods";
import { Screen } from "@/components/Screen";

export const DetailsScreen = ({
  route,
}: NativeStackScreenProps<AppStackParamList, "RecipeDetails">) => {
  const { id } = route.params;
  const { data, isLoading } = useDocumentQuery<Recipe, RecipeDoc>(
    "recipes",
    id,
    recipeDocMapper,
  );

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <RecipeProvider recipe={data}>
      <Screen
        preset="scrollable"
        style={styles.container}
        contentContainerStyle={{ paddingTop: spacing.medium }}>
        <RecipeHeader />
        <RecipeIngredients />
        <RecipePreparationMethods />
      </Screen>
    </RecipeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.medium,
  },
});
