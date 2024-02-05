import {
  ButtonProps,
  StyleSheet,
  TouchableOpacity,
  ViewProps,
} from "react-native";
import { Icon } from "../Icon";
import { FC } from "react";
import { spacing } from "@/theme/spacing";

export type RoundButtonProps = Omit<ButtonProps, "title"> & ViewProps;

export const RoundButton: FC<RoundButtonProps> = ({
  style: $styleOverride,
  onPress,
}) => {
  const $styles = [styles.button, $styleOverride];

  return (
    <TouchableOpacity style={$styles} onPress={onPress}>
      <Icon name="add" size={"lg"} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.small,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "black",
    borderRadius: 100,
  },
});
