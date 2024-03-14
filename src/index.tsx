import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './i18n';

import { AppRouterHistory, MuiStyleRegistryProvider } from '@/separatedModules/components';

import '@/assets/styles/main.scss';

const container = document.getElementById('root');
const ROOT = ReactDOM.createRoot(container as HTMLElement);

ROOT.render(
  <React.StrictMode>
    <MuiStyleRegistryProvider>
      <RouterProvider router={AppRouterHistory} />
    </MuiStyleRegistryProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
