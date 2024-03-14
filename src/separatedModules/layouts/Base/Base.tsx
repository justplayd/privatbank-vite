import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { StyledLayoutBase } from './style';

export const BaseLayout = () => {
  return (
    <Suspense fallback={'loading'}>
      <StyledLayoutBase>
        <Outlet />
      </StyledLayoutBase>
    </Suspense>
  );
};
