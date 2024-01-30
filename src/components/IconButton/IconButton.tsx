import { FC } from "react";
import { Pressable } from "react-native";
import { Icon, IconProps, IconSize } from "@/components/Icon";

export type IconButtonProps = Omit<IconProps, "name" | "size"> & {
  icon: IconProps["name"];
  size?: IconSize;
  onPress?: () => void;
};

export const IconButton: FC<IconButtonProps> = ({
  style,
  icon,
  size = "sm",
  onPress,
  ...props
}) => {
  return (
    <Pressable
      onPress={onPress}
      {...props}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }, style]}>
      <Icon name={icon} size={size} />
    </Pressable>
  );
};
