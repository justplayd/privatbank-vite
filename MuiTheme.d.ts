/*
 * Docs for TS
 * https://plainenglish.io/blog/extend-material-ui-theme-in-typescript-a462e207131f
 * https://blog.softbinator.com/material-ui-customize-theme-typescript/
 * https://github.com/mui/material-ui/issues/31366#issuecomment-1166274026
 */

declare module '@mui/material/Grid' {
  interface GridOwnProps {
    row?: true;
  }
}
