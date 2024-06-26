import { FC } from "react";
import { Pressable } from "react-native";

import { Icon, IconProps, IconSize, IconName } from "@/components/Icon";

export type ToggleIconButtonProps = Omit<IconProps, "name" | "size"> & {
  icon: IconProps["name"];
  size?: IconSize;
  toggled?: boolean;
  onToggleChanged?: (toggled: boolean) => void;
};

export const ToggleIconButton: FC<ToggleIconButtonProps> = ({
  style,
  icon,
  size = "sm",
  toggled,
  onToggleChanged,
  ...props
}) => {
  return (
    <Pressable
      onPress={() => onToggleChanged?.(!toggled)}
      {...props}
      style={style}>
      <Icon
        name={toggled ? icon : ((icon + "-outline") as IconName)}
        size={size}
      />
    </Pressable>
  );
};
