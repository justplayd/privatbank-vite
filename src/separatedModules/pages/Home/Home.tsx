import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { i18n } from '@/i18n';

import { TableItem } from './components';

export const HomePage = () => {
  return (
    <Grid container>
      <Grid justifyContent={'center'} alignItems={'center'} container row>
        <Grid xs={12} md={10} item>
          <Typography component={'h2'} sx={{ margin: '32px 0 24px', fontWeight: 600, textAlign: 'center' }}>
            {i18n.t('pages.home.pageTitle', { ns: 'global' })}
          </Typography>

          <TableItem />
        </Grid>
      </Grid>
    </Grid>
  );
};
