import { FC } from "react";
import { StyleSheet, TextInput, View, ViewProps } from "react-native";
import { IconButton } from "@/components/IconButton";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";

export type RecipePreparationMethodModalProps = ViewProps;

export const RecipePreparationMethodModal: FC<
  RecipePreparationMethodModalProps
> = ({ style, ...props }) => {
  const { colors } = useAppTheme();
  const { dismiss } = useBottomSheetModal();

  const inputStyle = [styles.textInput, { borderColor: colors.border }];

  const handleAddPreparationMethod = () => {
    dismiss();
  };

  return (
    <View {...props} style={[style, styles.container]}>
      <View>
        <TextInput
          style={inputStyle}
          placeholder="Description"
          //onChangeText={setPreparationMethod}
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
    height: 40,
    borderBottomWidth: 1,
  },
  button: { alignSelf: "flex-end" },
});
