import { FC } from "react";
import { StyleSheet, TextInput, View, ViewProps } from "react-native";
import { IconButton } from "@/components/IconButton";
import { useAppTheme } from "@/hooks/useAppTheme";

export type RecipeIngredientModalProps = ViewProps;

export const RecipeIngredientModal: FC<RecipeIngredientModalProps> = ({
  style,
  ...props
}) => {
  // const [name, setName] = useState("");
  // const [quantity, setQuantity] = useState(0);
  // const [unit, setUnit] = useState("");

  const { colors } = useAppTheme();
  const inputStyle = [styles.textInput, { borderColor: colors.border }];

  return (
    <View {...props} style={[style, styles.container]}>
      <TextInput
        style={inputStyle}
        placeholder="Quantity"
        keyboardType="numeric"
        //onChangeText={(value) => setQuantity(Number.parseInt(value, 10))}
      />
      <TextInput
        style={inputStyle}
        placeholder="Unit"
        //onChangeText={setUnit}
      />
      <TextInput
        style={inputStyle}
        placeholder="Name"
        //onChangeText={setName}
      />
      <IconButton
        style={styles.button}
        icon="checkmark"
        size={"lg"}
        // onPress={onCloseModal}
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
