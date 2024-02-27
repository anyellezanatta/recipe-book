import { FC } from "react";
import { StyleProp, View, ViewProps, ViewStyle } from "react-native";

import { spacing } from "@/theme/spacing";

type SeparatorProps = ViewProps & {
  size?: number;
  horizontal?: boolean;
};

export const Separator: FC<SeparatorProps> = ({
  size = spacing.medium,
  horizontal,
  style: $styleOverride,
  ...props
}) => {
  const $separatorStyles: StyleProp<ViewStyle> = [
    horizontal ? { width: size } : { height: size },
    $styleOverride,
  ];

  return <View {...props} style={$separatorStyles} />;
};

export const HorizontalSeparator: FC<Omit<SeparatorProps, "horizontal">> = (
  props,
) => {
  return <Separator horizontal {...props} />;
};
