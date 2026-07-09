import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Route, Routes } from 'react-router';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2e7d5b',
    },
    secondary: {
      main: '#f2b84b',
    },
    background: {
      default: '#111414',
      paper: '#181d1c',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

function SetupPlaceholder() {
  return (
    <main style={{ minHeight: '100vh', padding: 32 }}>
      <h1>Real-Time Surplus Food Marketplace</h1>
      <p>Step 1 setup is ready. Authentication screens will be added in Step 2.</p>
    </main>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="*" element={<SetupPlaceholder />} />
      </Routes>
    </ThemeProvider>
  );
}
