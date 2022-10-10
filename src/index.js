import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { DataProvider } from './context/stateProvider';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
   <DataProvider>
      <App />

   </DataProvider>
  
  </React.StrictMode>
);

