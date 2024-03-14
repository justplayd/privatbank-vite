import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

import { Base } from './style';

export const MuiGrid: {
  defaultProps?: ComponentsProps['MuiGrid'];
  styleOverrides?: ComponentsOverrides['MuiGrid'];
  variants?: ComponentsVariants['MuiGrid'];
} = {
  defaultProps: {},
  styleOverrides: Base.styleOverrides
};
