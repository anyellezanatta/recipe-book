import { useContext } from "react";

import { ThemeContext } from "@/contexts/theme/ThemeContext";
import { theme } from "@/theme/theme";

export const useAppTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("This hook must be used within the ThemeContext");
  }

  return theme[context];
};
