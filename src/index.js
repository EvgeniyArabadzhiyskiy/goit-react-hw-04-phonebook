import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import App from 'App';
// import './index.css';

import { theme } from 'constants';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'components/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);

// npm install --save styled-components
// npm i styled-system styled-components
