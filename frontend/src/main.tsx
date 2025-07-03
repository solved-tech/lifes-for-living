// src/main.tsx
import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme, rem } from '@mantine/core';
import App from './App';
import './index.css';
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import './mocks/api'; // Initialize mock API

const theme = createTheme({
  fontFamily: 'Georgia, "Times New Roman", serif',
  headings: {
    fontFamily: 'Georgia, "Times New Roman", serif',
    sizes: {
      h1: { fontSize: rem(48), fontWeight: '400', lineHeight: '1.2' },
      h2: { fontSize: rem(32), fontWeight: '400', lineHeight: '1.3' },
      h3: { fontSize: rem(24), fontWeight: '400', lineHeight: '1.4' }
    }
  },
  primaryColor: 'dark',
  colors: {
    dark: [
      '#f8f9fa',
      '#e9ecef',
      '#dee2e6',
      '#ced4da',
      '#adb5bd',
      '#6c757d',
      '#495057',
      '#343a40',
      '#212529',
      '#000000'
    ]
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme} defaultColorScheme="light">
    <App />
  </MantineProvider>,
);
