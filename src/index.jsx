import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SnackbarProvider } from 'notistack';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
);
