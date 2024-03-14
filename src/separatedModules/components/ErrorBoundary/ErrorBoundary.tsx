import { useRouteError } from 'react-router-dom';

export const ErrorBoundary = () => {
  const error: any = useRouteError();

  console.error('ErrorBoundary - ', error);

  return <div>{error.message}</div>;
};
