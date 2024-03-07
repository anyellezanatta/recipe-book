import { FC, useEffect, useMemo, useState } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ViewProps,
} from "react-native";

import { Text } from "@/components/Text";
import { useAppTheme } from "@/hooks/useAppTheme";
import { spacing } from "@/theme/spacing";

export type SegmentedControlProps = ViewProps & {
  tabs: string[];
  onTabPress: (index: number) => void;
};

const width = Dimensions.get("screen").width - 32;

export const SegmentedControl: FC<SegmentedControlProps> = ({
  tabs,
  onTabPress,
  ...props
}) => {
  const translateValue = (width - 4) / tabs?.length;
  const tabTranslate = useMemo(() => new Animated.Value(0), []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { colors } = useAppTheme();

  useEffect(() => {
    Animated.spring(tabTranslate, {
      toValue: currentIndex * translateValue,
      stiffness: 180,
      damping: 20,
      mass: 1,
      useNativeDriver: true,
    }).start();
  }, [currentIndex, tabTranslate, translateValue]);

  return (
    <Animated.View
      {...props}
      style={[
        styles.segmentedControlWrapper,
        { backgroundColor: colors.background },
      ]}>
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          styles.segmentedActive,
          {
            backgroundColor: colors.cardBackground,
            width: (width - 4) / tabs?.length,
          },
          { transform: [{ translateX: tabTranslate }] },
        ]}
      />
      {tabs.map((tab, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={[styles.textWrapper]}
            onPress={() => {
              setCurrentIndex(index);
              onTabPress(index);
            }}
            activeOpacity={0.7}>
            <Text
              style={[
                styles.textStyles,
                currentIndex === index && styles.textBold,
              ]}
              size={"sm"}>
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  segmentedActive: {
    position: "absolute",
    top: 0,
    margin: spacing.micro,
    borderRadius: spacing.extraSmall,
  },
  segmentedControlWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: spacing.extraSmall,
    marginVertical: spacing.large,
    paddingVertical: spacing.small,
  },
  textWrapper: {
    flex: 1,
    elevation: 9,
    paddingHorizontal: 5,
  },
  textStyles: {
    textAlign: "center",
  },
  textBold: {
    fontWeight: "bold",
  },
});
