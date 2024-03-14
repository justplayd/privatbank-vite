import { memo, useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { TableItemProps } from '../../helpers';

interface TableHeadWrapProps extends Pick<TableItemProps, 'columns' | 'handleSelectAllRows'> {}

export const TableHeadWrap = memo(({ columns, handleSelectAllRows }: TableHeadWrapProps) => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleChangeCheckbox = () => {
    const isSelected = !checkboxChecked;

    setCheckboxChecked(isSelected);
    handleSelectAllRows?.(isSelected);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Checkbox checked={checkboxChecked} onClick={handleChangeCheckbox} />
        </TableCell>

        {columns.map((column) => {
          return (
            <TableCell key={column.name} sx={{ minWidth: column.minWidth || 200 }}>
              <span>{column.title}</span>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
});
