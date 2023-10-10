import { FC } from "react";
import { FlatList, ListRenderItemInfo, ViewProps } from "react-native";
import { Recipe } from "@/models";
import { useReactQuerySubscription } from "@/hooks/useReactQuerySubscription";
import { LoadingScreen } from "@/components/FullScreenLoader/LoadingScreen";
import { RecipeDoc } from "@/services/firebase/firebaseClient.types";
import { RecipeCell } from "./RecipeCell";
import { spacing } from "@/theme/spacing";
import { Separator } from "@/components/Separator";
import { useNavigation } from "@react-navigation/native";

export const RecipeList: FC<ViewProps> = () => {
  const navigation = useNavigation();

  const { data, isLoading } = useReactQuerySubscription<Recipe, RecipeDoc>(
    "recipes",
    (recipeDoc) => {
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
    },
  );

  if (isLoading) <LoadingScreen />;

  const renderItem = ({ item }: ListRenderItemInfo<Recipe>) => {
    return (
      <RecipeCell
        item={item}
        onPress={() => navigation.navigate("DetailsScreen", { id: item.key })}
      />
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      contentContainerStyle={{ padding: spacing.medium }}
      ItemSeparatorComponent={Separator}
    />
  );
};
