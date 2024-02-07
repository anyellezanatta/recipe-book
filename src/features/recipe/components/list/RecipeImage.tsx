import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Image, ImageProps } from "@/components/Image";
import { Text } from "@/components/Text";
import { minutesToHours } from "date-fns";
import { Icon } from "@/components/Icon";
import { spacing } from "@/theme/spacing";
import { useAppTheme } from "@/hooks/useAppTheme";

export type RecipeImageProps = Omit<ImageProps, "source"> & {
  url: string;
  preparationTime: number;
};
export const RecipeImage: FC<RecipeImageProps> = ({
  style,
  url,
  preparationTime,
  ...props
}) => {
  const { colors } = useAppTheme();
  const duration =
    preparationTime >= 60
      ? `${minutesToHours(preparationTime)} hour`
      : `${preparationTime} min`;

  return (
    <View>
      <View
        style={[
          styles.timeContainer,
          { backgroundColor: colors.shadowBackground },
        ]}>
        <Icon name="time-outline" style={{ color: colors.shadowText }} />
        <Text size="xs" text={duration} style={{ color: colors.shadowText }} />
      </View>
      <Image {...props} style={style} source={{ uri: url }} />
    </View>
  );
};
const styles = StyleSheet.create({
  timeContainer: {
    zIndex: 1000,
    position: "absolute",
    bottom: spacing.medium,
    left: spacing.small,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    opacity: 0.9,
    padding: 4,
    borderRadius: spacing.small,
  },
});
