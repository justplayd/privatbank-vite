import { CSSProperties } from 'react';
import { PreloaderProps } from 'infinitytechnologies-ui';

import { PaletteOptions as PaletteOptionsMui } from '@mui/material/styles';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsVariants } from '@mui/material/styles/variants';

/*
 * Docs for TS
 * https://plainenglish.io/blog/extend-material-ui-theme-in-typescript-a462e207131f
 * https://blog.softbinator.com/material-ui-customize-theme-typescript/
 * https://github.com/mui/material-ui/issues/31366#issuecomment-1166274026
 */
declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      modal?: Record<string, any>;
    };
  }

  interface PaletteOptions extends PaletteOptionsMui {
    modal?: Record<string, any>;
  }

  interface ComponentNameToClassKey {
    MuiPreloader: 'root';
  }

  interface ComponentsPropsList {
    MuiPreloader: Partial<PreloaderProps>;
  }

  interface Components {
    MuiPreloader?: {
      defaultProps?: ComponentsPropsList['MuiPreloader'];
      styleOverrides?: ComponentsOverrides<Omit<Theme, 'components'>>['MuiPreloader'];
      variants?: ComponentsVariants['MuiPreloader'];
    };
  }

  interface TypographyVariants {
    titleLg: CSSProperties;
    titleMd: CSSProperties;
    titleSm: CSSProperties;
    bodyLg: CSSProperties;
    bodyMd: CSSProperties;
    bodySm: CSSProperties;
    labelLg?: CSSProperties;
    labelMd?: CSSProperties;
    labelSm?: CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    titleLg?: CSSProperties;
    titleMd?: CSSProperties;
    titleSm?: CSSProperties;
    bodyLg?: CSSProperties;
    bodyMd?: CSSProperties;
    bodySm?: CSSProperties;
    labelLg?: CSSProperties;
    labelMd?: CSSProperties;
    labelSm?: CSSProperties;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    round: true;
    headerBlack: true;
  }

  interface ButtonOwnProps {
    isRound?: boolean;
  }

  interface ButtonPropsColorOverrides {
    black?: true;
    white?: true;
  }
}

declare module '@mui/material/Alert' {
  interface AlertPropsVariantOverrides {
    notice: true;
  }
}

declare module '@mui/material/Grid' {
  interface GridOwnProps {
    row?: true;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    titleLg: true;
    titleMd: true;
    titleSm: true;
    bodyLg: true;
    bodyMd: true;
    bodySm: true;
    labelLg: true;
    labelMd: true;
    labelSm: true;
  }
}
