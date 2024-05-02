import { StyleSheet, View } from "react-native";

import { ImagePicker } from "@/components/ImagePicker";
import { Input } from "@/components/Input";
import { SegmentedControl } from "@/components/SegmentedControl";
import { Text } from "@/components/Text";
import { useRecipeAdd } from "@/features/recipe/hooks/useRecipeAdd";
import { spacing } from "@/theme/spacing";

export const RecipeAdd = () => {
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
        <Input
          id="title"
          style={styles.textInput}
          placeholder="Title"
          onChangeValue={(value) => setRecipeValue!("title", value)}
        />
      </View>
      <View>
        <Text text="Description" size="sm" />
        <Input
          id="description"
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
        <Input
          id="time"
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
        <Input
          id="yields"
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
