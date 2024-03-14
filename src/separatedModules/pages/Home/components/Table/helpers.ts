import { NullableT } from '@/subsidiaryBinders/types';

import { i18n } from '@/i18n';

interface DataI {
  id: number;
  country: string;
  lastName: NullableT<string>;
  firstName: NullableT<string>;
  fullName: NullableT<string>;
  age: NullableT<number>;
}

export type DataKeys = keyof DataI;

export interface TableColumnI<T = DataKeys> {
  name: T;
  title: string;
  minWidth?: number;
  value: string | number;
  isValid: boolean;
  error: string;
  type: 'input' | 'text';
  isEditable: boolean;
}

interface TableRowI extends DataI {}

export type TableRowFormed = Record<DataKeys, TableColumnI>;

export interface TableItemProps {
  columns: TableColumnI[];
  column: TableColumnI;
  row: TableRowFormed;
  rows: TableRowFormed[];
  handleSelectAllRows: (value: boolean) => void;
  handleChangeCell: (rowId: number, name: DataKeys, value: string | number) => void;
}

export interface StateI extends Pick<TableItemProps, 'rows'> {}

export const dataColumns: TableColumnI[] = [
  {
    name: 'id',
    title: i18n.t('pages.home.table.columns.id', { ns: 'global' }),
    type: 'text',
    value: '',
    error: '',
    isValid: true,
    isEditable: true,
    minWidth: 50
  },
  {
    name: 'lastName',
    title: i18n.t('pages.home.table.columns.lastName', { ns: 'global' }),
    type: 'input',
    value: '',
    error: '',
    isValid: true,
    isEditable: true
  },
  {
    name: 'firstName',
    title: i18n.t('pages.home.table.columns.firstName', { ns: 'global' }),
    type: 'input',
    value: '',
    error: '',
    isValid: true,
    isEditable: true
  },
  {
    name: 'age',
    title: i18n.t('pages.home.table.columns.age', { ns: 'global' }),
    type: 'input',
    value: '',
    error: '',
    isValid: true,
    isEditable: true
  },
  {
    name: 'fullName',
    title: i18n.t('pages.home.table.columns.fullName', { ns: 'global' }),
    type: 'input',
    value: '',
    error: '',
    isValid: true,
    isEditable: true
  },
  {
    name: 'country',
    title: i18n.t('pages.home.table.columns.country', { ns: 'global' }),
    type: 'input',
    value: '',
    error: '',
    isValid: true,
    isEditable: false
  }
];

export const rows: TableRowI[] = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', fullName: 'Snow Jon', age: 35, country: 'India' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', fullName: 'Cersei Lannister', age: 42, country: 'China' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', fullName: 'Jaime Lannister', age: 45, country: 'Italy' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', fullName: 'Arya Stark', age: 16, country: 'United States' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', fullName: 'Daenerys Targaryen', age: null, country: 'Canada' },
  { id: 6, lastName: 'Melisandre', firstName: null, fullName: 'Melisandre', age: 150, country: 'Australia' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', fullName: 'Ferrara Clifford', age: 44, country: 'Germany' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', fullName: 'Rossini Frances', age: 36, country: 'Ireland' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', fullName: 'Harvey Roxie', age: 65, country: 'Mexico' },
  { id: 10, lastName: 'Roxie', firstName: 'Harvey', fullName: 'Harvey Roxie', age: 65, country: 'Japan' }
];

export const formedRows = (rows: TableRowI[]): TableRowFormed[] => {
  return rows.map((row) => {
    const updatedRow = {} as TableRowFormed;

    dataColumns.forEach((column) => {
      updatedRow[column.name] = {
        ...column,
        value: row[column.name] || ''
      };
    });

    return updatedRow;
  });
};

export const filteredFormedColumns = dataColumns.reduce((accumulator, currentValue) => {
  return {
    ...accumulator,
    [currentValue.name]: {
      ...currentValue,
      title: currentValue.title,
      value: '',
      isValid: true,
      error: ''
    }
  };
}, {} as TableRowFormed);

export const isRowSelected = (id: number, selected: number[]) => {
  return selected.includes(id);
};

export const initState: StateI = {
  rows: []
};

export const TIMEOUT_VALUE = 5000;
