export const Project = {
  root: {
    borderBottom: '1px solid var(--border-default, rgba(9, 14, 22, 0.15))',
    transition: 'all 0.2s ease-in-out',
    display: 'flex',
    '&:hover:not(.MuiTableRow-head)': {
      cursor: 'pointer',
      background: 'var(--background-selected-hovered, #E9F2FF)'
    },
    '&.Mui-selected': {
      background: 'var(--background-selected-hovered, #E9F2FF)'
    },
    '&:last-child': {
      border: 'none'
    }
  },
  head: {
    borderBottom: '2px solid var(--border-default, rgba(9, 14, 22, 0.15)) !important'
  }
};

export const Base = {};
