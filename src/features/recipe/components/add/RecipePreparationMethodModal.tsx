import { FC } from "react";
import { StyleSheet, TextInput, View, ViewProps } from "react-native";
import { IconButton } from "@/components/IconButton";
import { useAppTheme } from "@/hooks/useAppTheme";

export type RecipePreparationMethodModalProps = ViewProps;

export const RecipePreparationMethodModal: FC<
  RecipePreparationMethodModalProps
> = ({ style, ...props }) => {
  const { colors } = useAppTheme();
  const inputStyle = [styles.textInput, { borderColor: colors.border }];

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
          // onPress={onCloseModal}
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
