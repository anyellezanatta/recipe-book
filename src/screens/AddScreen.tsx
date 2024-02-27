import { useCallback, useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import { Screen } from "@/components/Screen";
import { RecipeAddList } from "@/features/recipe/components/add/RecipeAddList";
import { RecipeFooterAdd } from "@/features/recipe/components/add/RecipeFooterAdd";
import { RecipeHeaderAdd } from "@/features/recipe/components/add/RecipeHeaderAdd";
import { RecipeIngredientModal } from "@/features/recipe/components/add/RecipeIngredientModal";
import { RecipePreparationMethodModal } from "@/features/recipe/components/add/RecipePreparationMethodModal";
import { RecipeAddProvider } from "@/features/recipe/contexts/add/RecipeAddProvider";
import { spacing } from "@/theme/spacing";

export const AddScreen = () => {
  const refPreparationMethod = useRef<BottomSheetModal>(null);
  const refIngredient = useRef<BottomSheetModal>(null);
  const snapPoints = ["30%"];

  const onExpandModalIngredient = () => {
    refIngredient.current?.present();
  };

  const onExpandModalPreparationMethod = () => {
    refPreparationMethod.current?.present();
  };

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0}
      />
    ),
    [],
  );

  return (
    <Screen safeAreaEdges={["bottom"]}>
      <RecipeAddProvider>
        <BottomSheetModalProvider>
          <View style={styles.container}>
            <ScrollView>
              <RecipeHeaderAdd />
              <RecipeAddList
                onAddPress={onExpandModalIngredient}
                listType={"ingredients"}
              />
              <RecipeAddList
                onAddPress={onExpandModalPreparationMethod}
                listType={"preparationMethods"}
              />
            </ScrollView>
            <RecipeFooterAdd onPress={() => {}} />
          </View>

          <BottomSheetModal
            ref={refPreparationMethod}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}>
            <RecipePreparationMethodModal />
          </BottomSheetModal>
          <BottomSheetModal
            ref={refIngredient}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}>
            <RecipeIngredientModal />
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </RecipeAddProvider>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.medium,
  },
});
