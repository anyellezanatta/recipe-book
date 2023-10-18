import { ScrollView, StyleSheet } from "react-native";
import { useSubscribeToDocument } from "@/hooks/useSubscribeToDocument";
import { Recipe } from "@/models";
import { AppStackParamList } from "@/navigators/AppNavigator";
import { RecipeDoc } from "@/services/firebase/firebaseClient.types";
import { spacing } from "@/theme/spacing";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LoadingScreen } from "../components/FullScreenLoader/LoadingScreen";
import { RecipeProvider } from "@/features/recipe/contexts/RecipeProvider";
import { recipeDocMapper } from "@/features/recipe/mappers/recipeDocMapper";
import { RecipeHeader } from "@/features/recipe/components/RecipeHeader";
import { RecipeIngredients } from "@/features/recipe/components/RecipeIngredients";
import { RecipePreparationMethods } from "@/features/recipe/components/RecipePreparationMethods";

export const DetailsScreen = ({
  route,
}: NativeStackScreenProps<AppStackParamList, "DetailsScreen">) => {
  const { id } = route.params;
  const insets = useSafeAreaInsets();
  const { data, isLoading } = useSubscribeToDocument<Recipe, RecipeDoc>(
    "recipes",
    id,
    recipeDocMapper,
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <RecipeProvider recipe={data}>
      <ScrollView
        style={[styles.container, { paddingTop: insets.top + spacing.medium }]}>
        <RecipeHeader />
        <RecipeIngredients />
        <RecipePreparationMethods />
      </ScrollView>
    </RecipeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.medium,
  },
});
