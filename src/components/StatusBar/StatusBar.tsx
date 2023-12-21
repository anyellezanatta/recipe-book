import { useAppTheme } from "@/hooks/useAppTheme";
import { FC } from "react";
import { Platform, StatusBar as RNStatusBar } from "react-native";

export const StatusBar: FC = () => {
  const { dark } = useAppTheme();

  return Platform.select({
    android: (
      <RNStatusBar
        barStyle={dark ? "light-content" : "dark-content"}
        backgroundColor="transparent"
      />
    ),
    default: null,
  });
};
