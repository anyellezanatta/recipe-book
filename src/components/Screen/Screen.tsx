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
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";
import { StatusBar } from "@/components/StatusBar";

type ScrollableScreenProps = { preset?: "scrollable" } & ScrollViewProps;

type FixedScreenProps = { preset?: "fixed" } & ViewProps;

type ScreenProps = (ScrollableScreenProps | FixedScreenProps) & {
  keyboardAvoidingViewProps?: KeyboardAvoidingViewProps;
  safeAreaEdges?: SafeAreaViewProps["edges"];
  safeAreaMode?: SafeAreaViewProps["mode"];
};

export const Screen: FC<ScreenProps> = ({
  preset = "fixed",
  safeAreaEdges = [],
  safeAreaMode,
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
    <SafeAreaView
      edges={safeAreaEdges}
      mode={safeAreaMode}
      style={styles.container}>
      <StatusBar />
      <Component {...props} style={containerStyles}>
        <KeyboardAvoidingView
          {...keyboardAvoidingViewProps}
          style={keyboardAvoidingStyles}>
          {children}
        </KeyboardAvoidingView>
      </Component>
    </SafeAreaView>
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
