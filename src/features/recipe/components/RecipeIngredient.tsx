import { Text } from "@/components/Text";
import { useAppTheme } from "@/hooks/useAppTheme";
import { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";

export type RecipeIngredientProps = ViewProps & {
  name: string;
  quantity: number;
  unit: string;
};

export const RecipeIngredient: FC<RecipeIngredientProps> = ({
  style: $styleOverride,
  name,
  quantity,
  unit,
  ...props
}) => {
  const { colors } = useAppTheme();
  const $styles: StyleProp<ViewStyle> = [styles.container, $styleOverride];

  return (
    <View key={name} {...props} style={$styles}>
      <Text text={name} size="xs" style={styles.name} />
      <Text
        text={`${quantity} ${unit}`}
        size="xs"
        style={{ color: colors.cardTitle }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "600",
  },
});
