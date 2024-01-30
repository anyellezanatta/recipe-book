import { StyleSheet } from "react-native";
import { Screen } from "@/components/Screen";
import { spacing } from "@/theme/spacing";
import { RecipeIngredientAddList } from "@/features/recipe/components/add/RecipeIngredientAddList";
import { RecipePreparationMethodAddList } from "@/features/recipe/components/add/RecipePreparationMethodAddList";
import { RecipeAddProvider } from "@/features/recipe/contexts/add/RecipeAddProvider";
import { RecipeHeaderAdd } from "@/features/recipe/components/add/RecipeHeaderAdd";
import { RecipeFooterAdd } from "@/features/recipe/components/add/RecipeFooterAdd";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useMemo, useRef } from "react";
import { RecipePreparationMethodModal } from "@/features/recipe/components/add/RecipePreparationMethodModal";
import { RecipeIngredientModal } from "@/features/recipe/components/add/RecipeIngredientModal";

export const AddScreen = () => {
  const ref = useRef<BottomSheetModal>(null);
  const ref2 = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const onExpandModal = () => {
    ref.current?.present();
  };

  return (
    <Screen safeAreaEdges={["bottom"]} style={styles.container}>
      <RecipeAddProvider>
        <RecipeHeaderAdd />
        <RecipeIngredientAddList onAddPress={() => ref2.current?.present()} />
        <RecipePreparationMethodAddList onAddPress={onExpandModal} />
        <RecipeFooterAdd onPress={() => {}} />
        <BottomSheetModal ref={ref} snapPoints={snapPoints}>
          <RecipePreparationMethodModal />
        </BottomSheetModal>
        <BottomSheetModal ref={ref2} snapPoints={snapPoints}>
          <RecipeIngredientModal />
        </BottomSheetModal>
      </RecipeAddProvider>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.medium,
    rowGap: spacing.medium,
  },
});
