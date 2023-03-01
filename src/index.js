import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Helmet>
      <title>Abyansyah Ahmad</title>
      <meta name="description" content="Abyansyah Ahmad" />
    </Helmet>
    <App />
  </BrowserRouter>
);
