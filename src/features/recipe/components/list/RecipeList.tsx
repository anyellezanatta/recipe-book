import { useState } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { DebouncedSearchInput } from "@/components/DebouncedSearchInput";
import { FullScreenLoader } from "@/components/FullScreenLoader/FullScreenLoader";
import { Separator } from "@/components/Separator";
import { Text } from "@/components/Text";
import { recipeDocMapper } from "@/features/recipe/mappers/recipeDocMapper";
import { useSubscribeCollectionQuery } from "@/hooks/useSubscribeCollectionQuery";
import { Recipe } from "@/models";
import { RecipeDoc } from "@/services/firebase/firebaseClient.types";
import { spacing } from "@/theme/spacing";

import { RecipeCell } from "./RecipeCell";

export const RecipeList = () => {
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
        onPress={() => navigation.navigate("RecipeDetails", { id: item.key })}
      />
    );
  };

  return (
    <View style={styles.container}>
      <DebouncedSearchInput
        style={styles.inputSearch}
        onSearch={setSearchTerm}
        placeholder={"Search for a recipe"}
      />
      <Text
        text="My Recipes"
        size="sm"
        style={{ marginHorizontal: spacing.large }}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: spacing.medium,
          paddingBottom: spacing.huge,
        }}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing.extraLarge,
    paddingTop: spacing.large,
  },
  inputSearch: {
    marginHorizontal: spacing.medium,
    height: 50,
  },
});
