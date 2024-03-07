import { StyleSheet, View } from "react-native";

import { DebouncedInput } from "@/components/DebouncedInput";
import { ImagePicker } from "@/components/ImagePicker";
import { SegmentedControl } from "@/components/SegmentedControl";
import { Text } from "@/components/Text";
import { useRecipeAdd } from "@/features/recipe/hooks/useRecipeAdd";
import { spacing } from "@/theme/spacing";

export const RecipeHeaderAdd = () => {
  const { setRecipeValue } = useRecipeAdd();
  const difficultyList = ["easy", "medium", "hard"];
  return (
    <View style={styles.container}>
      <View>
        <Text text="Image" size="sm" />
        <ImagePicker onSetUrl={(url) => setRecipeValue!("imageUrl", url)} />
      </View>
      <View>
        <Text text="Title" size="sm" />
        <DebouncedInput
          style={styles.textInput}
          placeholder="Title"
          onChangeValue={(value) => setRecipeValue!("title", value)}
        />
      </View>
      <View>
        <Text text="Description" size="sm" />
        <DebouncedInput
          style={styles.textInputMultiline}
          placeholder="Description"
          multiline
          onChangeValue={(value) => {
            setRecipeValue!("description", value);
          }}
        />
      </View>
      <View>
        <Text text="Difficulty" size="sm" />
        <SegmentedControl
          tabs={difficultyList}
          onTabPress={(index) =>
            setRecipeValue!("difficulty", difficultyList[index]!)
          }
        />
      </View>
      <View>
        <Text text="Time" size="sm" />
        <DebouncedInput
          style={styles.textInput}
          placeholder="Time in minutes"
          keyboardType="numeric"
          onChangeValue={(value) => {
            setRecipeValue!("preparationTime", Number.parseInt(value, 10));
          }}
        />
      </View>
      <View>
        <Text text="Yields" size="sm" />
        <DebouncedInput
          style={styles.textInput}
          placeholder="Yields"
          keyboardType="numeric"
          onChangeValue={(value) => {
            setRecipeValue!("yields", Number.parseInt(value, 10));
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing.small,
  },
  textInput: {
    height: 40,
  },
  textInputMultiline: {
    height: 80,
  },
});
