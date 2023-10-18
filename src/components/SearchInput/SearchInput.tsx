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
import { useAppTheme } from "@/hooks/useAppTheme";

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
  const { colors } = useAppTheme();

  const placeholder = inputPlaceholder;
  return (
    <View style={[styles.container, style]}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholderTextColor={colors.text}
        {...props}
        placeholder={placeholder}
        style={[styles.input, inputStyle]}
      />
      <Icon
        style={{ color: colors.text }}
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
