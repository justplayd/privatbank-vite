import { ChangeEvent, FormEvent, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

import { i18n } from '@/i18n';

import { TableRowFormed } from '../../helpers';

interface AddRowProps {
  selectedRows: number;
  columns: TableRowFormed;
  handleDeleteRows: () => void;
  handleAddRow: (row: TableRowFormed) => void;
}

export const AddRow = ({ selectedRows, columns, handleDeleteRows, handleAddRow }: AddRowProps) => {
  const [open, setOpen] = useState(false);
  const [fields, setFields] = useState(columns);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setFields(columns);

    setOpen(false);
  };

  const handleChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFields((state) => ({
      ...state,
      [name]: {
        // @ts-ignore
        ...state[name],
        value,
        isValid: Boolean(value),
        error: !value ? 'required' : ''
      }
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const isFormValid = handleValidate();

    if (isFormValid) {
      handleAddRow({
        ...fields,
        id: {
          ...fields.id,
          value: Math.floor(Math.random() * 100) + 10
        }
      });

      handleModalClose();
    }
  };

  const handleValidate = () => {
    const keys = Object.keys(fields);

    // @ts-ignore
    const updatedState: typeof fields = {};

    keys.forEach((i) => {
      // @ts-ignore
      updatedState[i] = {
        // @ts-ignore
        ...fields[i],
        // @ts-ignore
        isValid: !!fields[i].value
      };
    });

    setFields(updatedState);

    const isFormValid = Object.keys(fields)
      .filter((key) => key !== 'id')
      // @ts-ignore
      .find((key) => updatedState[key].isValid === false);

    return Boolean(!isFormValid);
  };

  return (
    <Box sx={{ border: '1px solid', display: 'flex', justifyContent: 'flex-end', padding: '20px', margin: '12px 0 0' }}>
      <Button variant={'outlined'} sx={{ margin: '0 12px 0 0' }} disabled={!!selectedRows} onClick={handleModalOpen}>
        {i18n.t('pages.home.table.btnItemAdd', { ns: 'global' })}
      </Button>

      <Button variant={'outlined'} color={'primary'} disabled={!selectedRows} onClick={handleDeleteRows}>
        {i18n.t('pages.home.table.btnItemRemove', { ns: 'global' })}
      </Button>

      <Dialog open={open} onClose={handleModalClose}>
        <DialogTitle sx={{ m: 0, p: 2 }}> {i18n.t('pages.home.table.modal.title', { ns: 'global' })}</DialogTitle>

        <IconButton
          aria-label={'close'}
          onClick={handleModalClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent>
          <form onSubmit={handleSubmit}>
            {Object.entries(fields)
              .filter(([name]) => name !== 'id')
              .map(([name, column]) => {
                return (
                  <TextField
                    key={name}
                    variant={'outlined'}
                    name={name}
                    value={column.value}
                    error={Boolean(!column.isValid)}
                    placeholder={column.title}
                    onChange={handleChangeField}
                  />
                );
              })}

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '8px 0' }}>
              <Button variant={'outlined'} color={'primary'} type={'submit'}>
                {i18n.t('pages.home.table.btnItemCreate', { ns: 'global' })}
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
