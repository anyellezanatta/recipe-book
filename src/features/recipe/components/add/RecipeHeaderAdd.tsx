import { StyleSheet, View } from "react-native";
import { DebouncedInput } from "@/components/DebouncedInput";
import { ImagePicker } from "@/components/ImagePicker";
import { Text } from "@/components/Text";
import { useRecipeAdd } from "../../hooks/useRecipeAdd";

export const RecipeHeaderAdd = () => {
  const { setRecipeValue } = useRecipeAdd();

  return (
    <View>
      <ImagePicker onSetUrl={(url) => setRecipeValue!("imageUrl", url)} />
      <Text text="Title" size="sm" />
      <DebouncedInput
        style={styles.textInput}
        placeholder="Title"
        onChangeValue={(value) => setRecipeValue!("title", value)}
      />
      <Text text="Description" size="sm" />
      <DebouncedInput
        style={styles.textInputMultiline}
        placeholder="Description"
        multiline
        onChangeValue={(value) => {
          setRecipeValue!("description", value);
        }}
      />
      <Text text="Difficulty" size="sm" />
      <Text text="Time" size="sm" />
      <DebouncedInput
        style={styles.textInput}
        placeholder="Time in minutes"
        keyboardType="numeric"
        onChangeValue={(value) => {
          setRecipeValue!("preparationTime", value);
        }}
      />
      <Text text="Yields" size="sm" />
      <DebouncedInput
        style={styles.textInput}
        placeholder="Yields"
        keyboardType="numeric"
        onChangeValue={(value) => {
          setRecipeValue!("yields", value);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
  },
  textInputMultiline: {
    height: 80,
  },
  button: {
    alignSelf: "flex-end",
  },
});
