import { FC, useState } from "react";
import { StyleSheet, TextInput, View, ViewProps } from "react-native";

import { useBottomSheetModal } from "@gorhom/bottom-sheet";

import { IconButton } from "@/components/IconButton";
import { useRecipeAdd } from "@/features/recipe/hooks/useRecipeAdd";
import { useAppTheme } from "@/hooks/useAppTheme";
import { Unit } from "@/models";

export type RecipeIngredientModalProps = ViewProps;

export const RecipeIngredientModal: FC<RecipeIngredientModalProps> = ({
  style,
  ...props
}) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [unit, setUnit] = useState<Unit>("kg");

  const { dismiss } = useBottomSheetModal();
  const { addIngredient } = useRecipeAdd();
  const { colors } = useAppTheme();
  const inputStyle = [styles.textInput, { borderColor: colors.border }];

  const handleAddIngredient = () => {
    addIngredient!({ name: name, quantity: quantity, unit: unit });
    dismiss();
  };

  return (
    <View {...props} style={[style, styles.container]}>
      <TextInput
        style={inputStyle}
        placeholder="Quantity"
        keyboardType="numeric"
        onChangeText={(value) => setQuantity(Number.parseInt(value, 10))}
      />
      <TextInput
        style={inputStyle}
        placeholder="Unit"
        onChangeText={(value) => setUnit(value as Unit)}
      />
      <TextInput style={inputStyle} placeholder="Name" onChangeText={setName} />
      <IconButton
        style={styles.button}
        icon="checkmark"
        size={"lg"}
        onPress={handleAddIngredient}
      />
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
