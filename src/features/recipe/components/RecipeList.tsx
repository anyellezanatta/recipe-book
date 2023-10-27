import { FC } from "react";
import { FlatList, ListRenderItemInfo, ViewProps } from "react-native";
import { Recipe } from "@/models";
import { useSubscribeCollectionQuery } from "@/hooks/useSubscribeCollectionQuery";
import { FullScreenLoader } from "@/components/FullScreenLoader/FullScreenLoader";
import { RecipeDoc } from "@/services/firebase/firebaseClient.types";
import { RecipeCell } from "./RecipeCell";
import { spacing } from "@/theme/spacing";
import { Separator } from "@/components/Separator";
import { useNavigation } from "@react-navigation/native";
import { recipeDocMapper } from "../mappers/recipeDocMapper";

export const RecipeList: FC<ViewProps> = () => {
  const navigation = useNavigation();

  const { data, isLoading } = useSubscribeCollectionQuery<Recipe, RecipeDoc>(
    "recipes",
    recipeDocMapper,
  );

  if (isLoading) {
    return <FullScreenLoader />;
  }

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
