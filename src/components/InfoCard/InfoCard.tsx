import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Icon, IconProps } from "../Icon";
import { Text, TextProps } from "../Text";
import { useAppTheme } from "@/hooks/useAppTheme";
import { spacing } from "@/theme/spacing";

export type InfoCardProps = Omit<IconProps, "name"> & {
  icon: IconProps["name"];
  text: TextProps["text"];
  textSize?: TextProps["size"];
};

export const InfoCard: FC<InfoCardProps> = ({
  style: $styleOverride,
  icon,
  text,
  size,
  textSize = "xs",
  ...props
}) => {
  const { colors } = useAppTheme();
  const $styles = [
    styles.container,
    { backgroundColor: colors.cardBackground },
    $styleOverride,
  ];

  return (
    <View {...props} style={$styles}>
      <Icon name={icon} size={size} />
      <Text size={textSize}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: spacing.huge * 2,
    minHeight: spacing.huge * 2,
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.tiny,
    padding: spacing.extraSmall,
    borderRadius: spacing.extraSmall,
  },
});
