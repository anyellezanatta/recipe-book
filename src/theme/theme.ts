import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";

export const theme: Record<AppThemeName, AppTheme> = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: "#52504f",
      background: "#ffffff",
      inputBackground: "#f0f0f0",
      cardBackground: "red",
    },
  },

  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      inputBackground: "#4d4d4d",
      cardBackground: "red",
    },
  },
};

export type AppTheme = Theme & {
  colors: Theme["colors"] & {
    inputBackground: string;
    cardBackground: string;
  };
};

export type AppThemeName = "light" | "dark";
