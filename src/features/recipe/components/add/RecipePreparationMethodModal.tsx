import { FC, useState } from "react";
import { StyleSheet, TextInput, View, ViewProps } from "react-native";
import { IconButton } from "@/components/IconButton";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import { useRecipeAdd } from "../../hooks/useRecipeAdd";

export type RecipePreparationMethodModalProps = ViewProps;

export const RecipePreparationMethodModal: FC<
  RecipePreparationMethodModalProps
> = ({ style, ...props }) => {
  const { colors } = useAppTheme();
  const { dismiss } = useBottomSheetModal();
  const { addPreparationMethods } = useRecipeAdd();

  const inputStyle = [styles.textInput, { borderColor: colors.border }];
  const [preparationMethod, setPreparationMethod] = useState("");

  const handleAddPreparationMethod = () => {
    addPreparationMethods!(preparationMethod);
    dismiss();
  };

  return (
    <View {...props} style={[style, styles.container]}>
      <View>
        <TextInput
          style={inputStyle}
          placeholder="Description"
          multiline
          onChangeText={setPreparationMethod}
        />
        <IconButton
          style={styles.button}
          icon="checkmark"
          size={"lg"}
          onPress={handleAddPreparationMethod}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    height: 120,
    borderBottomWidth: 1,
  },
  button: { alignSelf: "flex-end" },
});
