import { Image, ScrollView, StyleSheet } from "react-native";
import { Text } from "@/components/Text";
import { useSubscribeToDocument } from "@/hooks/useSubscribeToDocument";
import { Recipe } from "@/models";
import { AppStackParamList } from "@/navigators/AppNavigator";
import { RecipeDoc } from "@/services/firebase/firebaseClient.types";
import { spacing } from "@/theme/spacing";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LoadingScreen } from "../components/FullScreenLoader/LoadingScreen";
import { RecipeProvider } from "@/features/recipe/contexts/RecipeProvider";
import { RecipeInfoCardList } from "@/features/recipe/components/RecipeInfoCardList";

const recipeDocMapper = (recipeDoc: RecipeDoc): Recipe => {
  return {
    key: recipeDoc.key,
    description: recipeDoc.description,
    favorite: recipeDoc.favorite,
    imageUrl: recipeDoc.image_url,
    tips: recipeDoc.tips,
    title: recipeDoc.title,
    yields: recipeDoc.yields,
    userId: recipeDoc.user_id,
  };
};

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
        <Image style={styles.image} source={{ uri: data?.imageUrl }} />
        <Text size="md">{data?.title}</Text>
        <RecipeInfoCardList />
        <Text size="sm">{data?.description}</Text>
      </ScrollView>
    </RecipeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.medium,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: spacing.medium,
  },
});
