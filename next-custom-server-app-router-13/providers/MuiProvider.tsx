import { useMemo, type PropsWithChildren } from "react";

import type { ThemeOptions } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import merge from "lodash/merge";

import { baseThemeOptions, lightThemeOptions } from "@/theme";

export const MuiProvider = ({ children }: PropsWithChildren) => {
  const theme = useMemo(() => {
    const mergedTheme: ThemeOptions = merge(
      lightThemeOptions,
      baseThemeOptions
    );

    return createTheme(mergedTheme);
  }, []);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
