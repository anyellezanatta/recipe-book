import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { Icon } from "../Icon";
import { spacing } from "@/theme/spacing";

export type SearchInputProps = TextInputProps & {
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
};

export const SearchInput = ({
  placeholder: inputPlaceholder,
  style,
  inputStyle,
  ...props
}: SearchInputProps) => {
  const placeholder = inputPlaceholder; // ?? t("search");
  return (
    <View style={style}>
      <TextInput
        underlineColorAndroid="transparent"
        //placeholderTextColor={colors.textDim}
        {...props}
        placeholder={placeholder}
        style={[
          styles.input,
          inputStyle, //{ color: colors.text }
        ]}
      />
      <Icon
        //style={{ color: colors.textDim }}
        name="search"
        size={spacing.extraLarge}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.tiny,
    paddingHorizontal: spacing.extraSmall,
    borderRadius: 100,
  },
  input: {
    padding: spacing.extraSmall,
    flex: 1,
  },
});
