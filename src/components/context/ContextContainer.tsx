import { ThemeProvider } from "@mui/material";
import { FC, ReactNode } from "react";
import { lightTheme } from "../../libs";
interface ContextContainerProps {
  children: ReactNode;
}
export const ContextContainer: FC<ContextContainerProps> = ({ children }) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};
