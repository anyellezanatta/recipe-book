import { FC } from "react";
import { Pressable } from "react-native";

import { Icon, IconProps, IconSize } from "@/components/Icon";
import { Text } from "@/components/Text";

export type IconButtonProps = Omit<IconProps, "name" | "size"> & {
  icon: IconProps["name"];
  size?: IconSize;
  text?: string;
  textPosition?: "right" | "left" | "bottom";
  onPress?: () => void;
};

export const IconButton: FC<IconButtonProps> = ({
  style,
  icon,
  text,
  textPosition = "bottom",
  size = "sm",
  onPress,
  ...props
}) => {
  return (
    <Pressable
      onPress={onPress}
      {...props}
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1.0 },
        style,
        {
          flexDirection:
            textPosition === "right"
              ? "row"
              : textPosition === "left"
              ? "row-reverse"
              : "column",
        },
      ]}>
      <Icon name={icon} size={size} />
      {text ? <Text text={text} size="sm" /> : null}
    </Pressable>
  );
};
