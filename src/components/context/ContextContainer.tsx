import { ThemeProvider } from "@mui/material";
import { FC, ReactNode } from "react";
import { lightTheme } from "../../libs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ContextContainerProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

export const ContextContainer: FC<ContextContainerProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};
