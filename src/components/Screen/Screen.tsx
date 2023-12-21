import { FC } from "react";
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";

type ScrollableScreenProps = { preset?: "scrollable" } & ScrollViewProps;

type FixedScreenProps = { preset?: "fixed" } & ViewProps;

type ScreenProps = (ScrollableScreenProps | FixedScreenProps) & {
  keyboardAvoidingViewProps?: KeyboardAvoidingViewProps;
};

export const Screen: FC<ScreenProps> = ({
  preset = "fixed",
  keyboardAvoidingViewProps,
  children,
  ...props
}) => {
  const Component = Presets[preset];

  const containerStyles: StyleProp<ViewStyle> = [styles.container, props.style];

  const keyboardAvoidingStyles: StyleProp<ViewStyle> = [
    preset === "fixed" && styles.container,
    keyboardAvoidingViewProps?.style,
  ];

  return (
    <Component {...props} style={containerStyles}>
      <KeyboardAvoidingView
        {...keyboardAvoidingViewProps}
        style={keyboardAvoidingStyles}>
        {children}
      </KeyboardAvoidingView>
    </Component>
  );
};

const Presets = {
  scrollable: ScrollView,
  fixed: View,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
