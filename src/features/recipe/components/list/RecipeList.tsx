import { useState } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Recipe } from "@/models";
import { useSubscribeCollectionQuery } from "@/hooks/useSubscribeCollectionQuery";
import { FullScreenLoader } from "@/components/FullScreenLoader/FullScreenLoader";
import { RecipeDoc } from "@/services/firebase/firebaseClient.types";
import { spacing } from "@/theme/spacing";
import { Separator } from "@/components/Separator";
import { recipeDocMapper } from "@/features/recipe/mappers/recipeDocMapper";
import { DebouncedSearchInput } from "@/components/DebouncedSearchInput";
import { RecipeCell } from "./RecipeCell";
import { Text } from "@/components/Text";

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
