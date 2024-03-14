import { createBrowserRouter } from 'react-router-dom';

import { BaseLayout } from '@/separatedModules/layouts';
import { HomePage, NotFoundPage } from '@/separatedModules/pages';

import { LINKS_PAGES } from '@/subsidiaryBinders/constants';

import { ErrorBoundary } from '../ErrorBoundary';

export const AppRouterHistory = createBrowserRouter([
  {
    path: LINKS_PAGES.home,
    element: <BaseLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  },
  {
    path: LINKS_PAGES.notFound,
    element: <NotFoundPage />,
    errorElement: <ErrorBoundary />
  }
]);
