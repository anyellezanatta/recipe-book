import { StyleSheet } from "react-native";
import { IconButton } from "@/components/IconButton";
import { useRecipeAdd } from "../../hooks/useRecipeAdd";

export const RecipeFooterAdd = ({ onPress }: { onPress: () => void }) => {
  const { saveRecipe } = useRecipeAdd();

  const onSave = () => {
    saveRecipe();
    onPress();
  };

  return (
    <IconButton
      icon="checkmark"
      size="lg"
      text="Save"
      style={styles.button}
      onPress={onSave}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
  },
});
