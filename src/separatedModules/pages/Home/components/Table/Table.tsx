import { useCallback, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

import { wait } from '@/utils';

import { AddRow, TableBodyItem } from '../Table/components';

import { TableHeadWrap } from './components';

import {
  dataColumns,
  DataKeys,
  filteredFormedColumns,
  formedRows,
  initState,
  rows,
  TableColumnI,
  TableRowFormed,
  TIMEOUT_VALUE
} from './helpers';

interface TableItemProps {
  columns?: TableColumnI[];
}

export const TableItem = ({ columns = dataColumns }: TableItemProps) => {
  const [state, setState] = useState(initState);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const handleSelectRow = useCallback(
    (id: number) => {
      const isSelected = selectedRows.includes(id);

      const updatedSelectedRows = isSelected
        ? selectedRows.filter((rowItemId) => rowItemId !== id)
        : [...selectedRows, id];

      setSelectedRows(updatedSelectedRows);
    },
    [selectedRows]
  );

  const handleSelectAllRows = useCallback(
    (value: boolean) => {
      const allRowsId = state.rows.map((rowItem) => rowItem.id.value as number);

      return setSelectedRows(value ? allRowsId : []);
    },
    [state.rows]
  );

  const handleChangeCell = useCallback((rowId: number, name: DataKeys, value: string | number) => {
    setState((state) => {
      const updatedRows = state.rows.map((rowItem) => {
        if (rowId === rowItem.id.value) {
          return {
            ...rowItem,
            [name]: {
              isValid: Boolean(value),
              // ToDo Improvement for minimal validation
              error: value ? '' : 'required',
              value
            }
          };
        }

        return rowItem;
      });

      return { ...state, rows: updatedRows };
    });
  }, []);

  const handleDeleteRows = () => {
    const filteredAllRows = state.rows.filter((row) => !selectedRows.includes(row.id.value as number));

    setState((state) => ({ ...state, rows: filteredAllRows }));
    setSelectedRows([]);
  };

  const handleAddRow = useCallback((rowItem: TableRowFormed) => {
    setState((state) => ({ ...state, rows: [...state.rows, rowItem] }));
  }, []);

  useEffect(() => {
    (async () => {
      await wait(TIMEOUT_VALUE);

      setState((state) => ({ ...state, rows: formedRows(rows) }));
      setIsLoading(false);
    })();
  }, []);

  return (
    <Box>
      {isLoading ? (
        <Box sx={{ width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress size={64} />
        </Box>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label={'simple table'}>
              <TableHeadWrap columns={columns} handleSelectAllRows={handleSelectAllRows} />

              <TableBodyItem
                selectedRows={selectedRows}
                rows={state.rows}
                columns={columns}
                handleSelectRow={handleSelectRow}
                handleChangeCell={handleChangeCell}
              />
            </Table>
          </TableContainer>

          <AddRow
            selectedRows={selectedRows.length}
            columns={filteredFormedColumns}
            handleDeleteRows={handleDeleteRows}
            handleAddRow={handleAddRow}
          />
        </>
      )}
    </Box>
  );
};
