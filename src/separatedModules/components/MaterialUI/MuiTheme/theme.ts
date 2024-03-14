import { createTheme } from '@mui/material/styles';

import {
  MuiContainer,
  MuiGrid,
  MuiOutlinedInput,
  MuiTable,
  MuiTableCell,
  MuiTableRow,
  MuiTextField
} from './components';

export const theme = createTheme({
  palette: {
    mode: 'light'
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1280,
      xl: 1600
    }
  },
  components: {
    MuiContainer,
    MuiGrid,
    MuiOutlinedInput,
    MuiTable,
    MuiTableCell,
    MuiTableRow,
    MuiTextField
  }
});
