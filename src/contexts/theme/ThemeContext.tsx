import { createContext } from "react";
import { AppThemeName } from "@/theme/theme";

export const ThemeContext = createContext<AppThemeName | null>(null);
