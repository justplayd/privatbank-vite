import * as React from 'react';

import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';

// import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../../MuiTheme/theme';

export function MuiStyleRegistryProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        {/* <CssBaseline /> */}
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
