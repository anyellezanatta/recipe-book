import { StyleSheet } from "react-native";
import { IconButton } from "@/components/IconButton";

export const RecipeFooterAdd = ({ onPress }: { onPress: () => void }) => {
  return (
    <IconButton
      icon="checkmark"
      size="lg"
      style={styles.button}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-end",
  },
});
