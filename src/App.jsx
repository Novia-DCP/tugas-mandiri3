import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@mui/material';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import theme from './theme';
import Beranda from './Beranda';
import Template from './Template';

export default function App() {
  // useState: menyimpan halaman aktif ('beranda' atau 'template')
  const [halaman, setHalaman] = useState('beranda');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ===== NAVBAR ===== */}
      <AppBar position="static">
        <Toolbar sx={{ gap: 2 }}>
          {/* Logo — ikon + teks putih konsisten */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
            <MovieCreationIcon sx={{ color: 'white' }} />
            <Typography variant="h6" fontWeight="bold" color="white">
              CapCut
            </Typography>
          </Box>

          {/* Tombol navigasi */}
          <Button
            color={halaman === 'beranda' ? 'primary' : 'inherit'}
            onClick={() => setHalaman('beranda')}
          >
            Beranda
          </Button>
          <Button
            color={halaman === 'template' ? 'primary' : 'inherit'}
            onClick={() => setHalaman('template')}
          >
            Template
          </Button>
        </Toolbar>
      </AppBar>

      {/* ===== KONTEN HALAMAN ===== */}
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
        {halaman === 'beranda' && (
          <Beranda onPindahHalaman={setHalaman} />
        )}
        {halaman === 'template' && (
          <Template />
        )}
      </Box>

    </ThemeProvider>
  );
}
