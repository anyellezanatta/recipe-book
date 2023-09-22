import { FC } from "react";
import { Recipe } from "@/models";
import { FlatList, ListRenderItemInfo, ViewProps } from "react-native";
import { useReactQuerySubscription } from "@/hooks/useReactQuerySubscription";
import { LoadingScreen } from "@/screens/LoadingScreen";
import { RecipeDoc } from "@/services/firebase/firebaseClient.types";
import { RecipeCell } from "./RecipeCell";

export const RecipeList: FC<ViewProps> = () => {
  const { data, isLoading } = useReactQuerySubscription<Recipe, RecipeDoc>(
    "recipes",
    (recipeDoc) => {
      console.log(recipeDoc);
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
    return <RecipeCell item={item} />;
  };

  return <FlatList data={data} renderItem={renderItem} />;
};
