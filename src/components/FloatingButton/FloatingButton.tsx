import {
  ButtonProps,
  StyleSheet,
  TouchableOpacity,
  ViewProps,
} from "react-native";
import { Icon } from "../Icon";
import { FC } from "react";
import { spacing } from "@/theme/spacing";

export type FloatingButtonProps = Omit<ButtonProps, "title"> & ViewProps;

export const FloatingButton: FC<FloatingButtonProps> = ({
  style: $styleOverride,
  onPress,
}) => {
  const $styles = [styles.button, $styleOverride];

  return (
    // <View style={styles.container}>
    <TouchableOpacity style={$styles} onPress={onPress}>
      <Icon name="add" size={"lg"} color="white" />
    </TouchableOpacity>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //alignItems: "flex-end",
    padding: spacing.small,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    position: "absolute",
    backgroundColor: "black",
    top: 390,
    right: 20,
    borderRadius: 100,
  },
});
