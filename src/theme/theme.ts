import { DarkTheme, DefaultTheme } from "@react-navigation/native";

export const theme = {
  lightTheme: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    },
  },

  darkTheme: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
    },
  },
};

export type AppTheme = keyof typeof theme | "auto";
