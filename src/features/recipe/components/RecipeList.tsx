import { FC, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  ListRenderItemInfo,
  ViewProps,
} from "react-native";
import { Recipe } from "@/models";
import { useSubscribeCollectionQuery } from "@/hooks/useSubscribeCollectionQuery";
import { FullScreenLoader } from "@/components/FullScreenLoader/FullScreenLoader";
import { RecipeDoc } from "@/services/firebase/firebaseClient.types";
import { RecipeCell } from "./RecipeCell";
import { spacing } from "@/theme/spacing";
import { Separator } from "@/components/Separator";
import { useNavigation } from "@react-navigation/native";
import { recipeDocMapper } from "../mappers/recipeDocMapper";
import { DebouncedSearchInput } from "@/components/DebouncedSearchInput";

export const RecipeList: FC<ViewProps> = (props) => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const { data, isLoading } = useSubscribeCollectionQuery<Recipe, RecipeDoc>(
    "recipes",
    recipeDocMapper,
    searchTerm,
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
    <KeyboardAvoidingView {...props}>
      <DebouncedSearchInput onSearch={setSearchTerm} />
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{ padding: spacing.medium }}
        ItemSeparatorComponent={Separator}
      />
    </KeyboardAvoidingView>
  );
};
