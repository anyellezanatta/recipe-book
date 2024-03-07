import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

import { Icon } from "@/components/Icon";
import { useAppTheme } from "@/hooks/useAppTheme";
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
  const { colors } = useAppTheme();

  const $styles = [
    styles.container,
    { backgroundColor: colors.inputBackground },
    style,
  ];

  const placeholder = inputPlaceholder;
  return (
    <View style={$styles}>
      <Icon
        style={{ color: colors.text }}
        name="search"
        size={spacing.extraLarge}
      />
      <TextInput
        underlineColorAndroid="transparent"
        placeholderTextColor={colors.secondaryText}
        {...props}
        placeholder={placeholder}
        style={[styles.input, inputStyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.nano,
    paddingHorizontal: spacing.extraSmall,
    borderRadius: 100,
  },
  input: {
    padding: spacing.extraSmall,
    flex: 1,
  },
});
