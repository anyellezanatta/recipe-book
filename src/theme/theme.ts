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
      cardBackground: "#f0f1f1",
      cardTitle: "#908d8c",
      shadowBackground: "#88898d",
      shadowText: "#ffffff",
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
      shadowBackground: "#88898d",
      shadowText: "#ffffff",
    },
  },
};

export type AppTheme = Theme & {
  colors: Theme["colors"] & {
    inputBackground: string;
    cardBackground: string;
    shadowBackground: string;
    cardTitle: string;
    secondaryText: string;
    shadowText: string;
  };
};

export type AppThemeName = "light" | "dark";
