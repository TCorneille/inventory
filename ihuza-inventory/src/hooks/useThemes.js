import { useContext } from "react";
import { ThemeContext } from "../context/Themes";

export const useTheme = () => {
  const context = useContext(ThemeContext);

 if (context === undefined) {
   throw new Error("Context is Undefined");
 }

  return context;
};
