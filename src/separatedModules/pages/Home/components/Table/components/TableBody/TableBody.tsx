import classNames from 'classnames';

import Checkbox from '@mui/material/Checkbox';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { TableCellEditable } from '../../components/TableCellEditable';

import { isRowSelected, TableItemProps } from '../../helpers';

interface TableBodyProps extends Pick<TableItemProps, 'rows' | 'columns' | 'handleChangeCell'> {
  selectedRows: number[];
  handleSelectRow: (id: number) => void;
}

export const TableBodyItem = ({ selectedRows, rows, columns, handleChangeCell, handleSelectRow }: TableBodyProps) => {
  return (
    <TableBody>
      {rows.map((row) => {
        const isItemSelected = isRowSelected(row.id.value as number, selectedRows);
        const rowId = row.id.value as number;

        const handleChangeCheckbox = () => {
          handleSelectRow(row.id.value as number);
        };

        return (
          <TableRow
            key={rowId}
            className={classNames({
              'Mui-selected': isItemSelected
            })}
          >
            <TableCell>
              <Checkbox checked={isItemSelected} onClick={handleChangeCheckbox} />
            </TableCell>

            {columns.map((column) => {
              return (
                <TableCellEditable
                  key={column.name}
                  initValue={row[column.name].value}
                  rowId={rowId}
                  errorMsg={row[column.name].error}
                  column={column}
                  handleChangeCell={handleChangeCell}
                />
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};
