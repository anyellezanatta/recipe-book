import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";

export const theme: Record<AppThemeName, AppTheme> = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: "#52504f",
      inputBackground: "#f0f0f0",
    },
  },

  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      inputBackground: "#4d4d4d",
    },
  },
};

export type AppTheme = Theme & {
  colors: Theme["colors"] & {
    inputBackground: string;
  };
};

export type AppThemeName = "light" | "dark";
