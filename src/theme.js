import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00D4FF',
    },
    secondary: {
      main: '#FF2D55',
    },
    background: {
      default: '#111111',
      paper: '#1C1C1C',
    },
  },
  typography: {
    fontFamily: 'Segoe UI, Arial, sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 'bold',
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;

