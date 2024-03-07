import { FC } from "react";
import { StyleSheet, View } from "react-native";

import { Icon, IconProps } from "@/components/Icon";
import { Text, TextProps } from "@/components/Text";
import { useAppTheme } from "@/hooks/useAppTheme";
import { spacing } from "@/theme/spacing";

export type InfoCardProps = Omit<IconProps, "name"> & {
  content: IconProps["name"] | number;
  title: TextProps["text"];
};

export const InfoCard: FC<InfoCardProps> = ({
  style: $styleOverride,
  content,
  title,
  size,
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
      {typeof content === "number" ? (
        <Text text={`${content}`} size="md" />
      ) : (
        <Icon name={content} size={size} style={{ color: colors.text }} />
      )}
      <Text size="xs" text={title} style={{ color: colors.cardTitle }} />
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
