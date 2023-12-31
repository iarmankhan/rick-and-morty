import React from 'react';
import ReactDOM from 'react-dom/client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { ApolloProvider } from './components/apollo-provider';
import { Router } from './components/router.tsx';

import theme from './lib/theme.ts';

import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider urlBase={'https://rickandmortyapi.com'}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
