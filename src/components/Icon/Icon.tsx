import Ionicons from "react-native-vector-icons/dist/glyphmaps/Ionicons.json";
import { IconProps as RNVIconProps } from "react-native-vector-icons/Icon";
import RNVIcon from "react-native-vector-icons/Ionicons";

export type IconName = keyof typeof Ionicons;
export type IconSize = keyof typeof $sizePresets | number;

export type IconProps = Omit<RNVIconProps, "name" | "size"> & {
  name: IconName;
  size?: IconSize;
};

export const Icon = ({ name, size = "sm", ...props }: IconProps) => {
  const actualSize = typeof size === "number" ? size : $sizePresets[size];

  return <RNVIcon name={name} size={actualSize} {...props} />;
};

const $sizePresets = {
  lg: 32,
  md: 24,
  sm: 20,
  xs: 16,
} as const;
