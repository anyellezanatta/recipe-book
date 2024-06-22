import { useCallback, useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";

import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Screen } from "@/components/Screen";
import { RecipeAddList } from "@/features/recipe/components/add/RecipeAddList";
import { RecipeFooterAdd } from "@/features/recipe/components/add/RecipeFooterAdd";
import { RecipeAdd } from "@/features/recipe/components/add/RecipeAdd";
import { RecipeIngredientModal } from "@/features/recipe/components/add/RecipeIngredientModal";
import { RecipePreparationMethodModal } from "@/features/recipe/components/add/RecipePreparationMethodModal";
import { RecipeAddProvider } from "@/features/recipe/contexts/add/RecipeAddProvider";
import { AppStackParamList } from "@/navigators/AppNavigator";
import { spacing } from "@/theme/spacing";

type AddScreenProps = NativeStackScreenProps<AppStackParamList, "RecipeAdd">;

export const AddScreen = ({ navigation }: AddScreenProps) => {
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
          <ScrollView style={styles.container}>
            <RecipeAdd />
            <RecipeAddList
              onAddPress={onExpandModalIngredient}
              listType={"ingredients"}
            />
            <RecipeAddList
              onAddPress={onExpandModalPreparationMethod}
              listType={"preparationMethods"}
            />
          </ScrollView>
          <RecipeFooterAdd
            onPress={() => {
              navigation.goBack();
            }}
          />

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
    paddingBottom: spacing.large,
  },
});
