import { ChangeEvent, memo, useState } from 'react';

import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';

import { TableItemProps } from '../../helpers';

interface TableCellEditableProps extends Pick<TableItemProps, 'column' | 'handleChangeCell'> {
  initValue: string | number;
  rowId: number;
  errorMsg: string;
}

export const TableCellEditable = memo(
  ({ initValue, rowId, errorMsg, column, handleChangeCell }: TableCellEditableProps) => {
    const [value, setValue] = useState(initValue);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const handleBlur = () => {
      handleChangeCell(rowId, column.name, value);
    };

    return (
      <TableCell key={rowId + column.name} component={'td'} sx={{ width: column.minWidth || 200 }}>
        {column.type === 'text' ? <span>{value}</span> : null}

        {column.type === 'input' ? (
          <TextField
            value={value}
            variant={'outlined'}
            placeholder={errorMsg}
            error={!value && Boolean(errorMsg)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ) : null}
      </TableCell>
    );
  }
);
