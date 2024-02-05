import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";

export const theme: Record<AppThemeName, AppTheme> = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: "#040303",
      secondaryText: "#aaabab",
      background: "#ffffff",
      inputBackground: "#f0f0f0",
      cardBackground: "#f0f0f0",
      cardTitle: "#908d8c",
    },
  },

  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      inputBackground: "#4d4d4d",
      cardBackground: "#f0f0f0",
      cardTitle: "#908d8c",
      secondaryText: "#aaabab",
    },
  },
};

export type AppTheme = Theme & {
  colors: Theme["colors"] & {
    inputBackground: string;
    cardBackground: string;
    cardTitle: string;
    secondaryText: string;
  };
};

export type AppThemeName = "light" | "dark";
