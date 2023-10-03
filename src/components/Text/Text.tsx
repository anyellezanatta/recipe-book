import { ReactNode } from "react";
import {
  type TextStyle,
  type TextProps as RNTextProps,
  Text as RNText,
} from "react-native";
import { useAppTheme } from "@/hooks/useAppTheme";

type Sizes = keyof typeof $sizeStyles;

export type TextProps = RNTextProps & {
  text?: string;
  size: Sizes;
  children?: ReactNode;
};

export const Text = ({
  size,
  text,
  children,
  style: $styleOverride,
  ...rest
}: TextProps) => {
  const { colors } = useAppTheme();

  const content = text || children;

  const $styles = [
    size && $sizeStyles[size],
    { color: colors.text },
    $styleOverride,
  ];
  return (
    <RNText selectable {...rest} style={$styles}>
      {content}
    </RNText>
  );
};

const $sizeStyles = {
  lg: { fontSize: 28 } as TextStyle,
  md: { fontSize: 20 } as TextStyle,
  sm: { fontSize: 16 } as TextStyle,
  xs: { fontSize: 12 } as TextStyle,
};
