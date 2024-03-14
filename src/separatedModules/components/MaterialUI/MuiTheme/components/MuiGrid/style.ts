export const Base = {
  styleOverrides: {
    root: ({ ownerState }: any) => {
      return {
        padding: '0 16px',
        display: 'block',
        ...(ownerState.row === true && {
          display: 'flex',
          margin: '0 -16px',
          padding: '0 !important',
          flex: '0 1 100%',
          width: 'auto'
        })
      };
    },
    item: {
      padding: '0 16px'
    }
  }
};
