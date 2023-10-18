import { ReactNode } from "react";
import { useColorScheme } from "react-native";
import { ThemeContext } from "./ThemeContext";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useColorScheme() || "dark";

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
