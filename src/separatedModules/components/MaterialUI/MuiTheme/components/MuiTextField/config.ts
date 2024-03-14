import merge from 'lodash/merge';

import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps } from '@mui/material/styles/props';
import { ComponentsVariants } from '@mui/material/styles/variants';

import { Base, Project } from './style';

const newStyleOverrides: Record<string, any> = merge(Base, Project);

export const MuiTextField: {
  defaultProps?: ComponentsProps['MuiTextField'];
  styleOverrides?: ComponentsOverrides['MuiTextField'];
  variants?: ComponentsVariants['MuiTextField'];
} = {
  defaultProps: {},
  styleOverrides: {
    ...newStyleOverrides
  }
};
