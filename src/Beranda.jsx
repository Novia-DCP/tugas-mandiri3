import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import SmartToyIcon from '@mui/icons-material/SmartToy';

// Data fitur — icon pakai MUI Icons
const fiturList = [
  { icon: <ContentCutIcon sx={{ fontSize: 40, color: '#00D4FF' }} />, judul: 'Edit Video',    deskripsi: 'Potong dan gabungkan video dengan mudah.' },
  { icon: <MusicNoteIcon  sx={{ fontSize: 40, color: '#00D4FF' }} />, judul: 'Tambah Musik',  deskripsi: 'Pilih musik dari ribuan koleksi gratis.' },
  { icon: <AutoAwesomeIcon sx={{ fontSize: 40, color: '#00D4FF' }} />,judul: 'Efek & Filter', deskripsi: 'Beri efek keren pada video kamu.' },
  { icon: <TextFieldsIcon  sx={{ fontSize: 40, color: '#00D4FF' }} />,judul: 'Tambah Teks',   deskripsi: 'Tambahkan teks dan subtitle otomatis.' },
  { icon: <FileUploadIcon  sx={{ fontSize: 40, color: '#00D4FF' }} />,judul: 'Export Video',  deskripsi: 'Export ke berbagai ukuran layar.' },
  { icon: <SmartToyIcon    sx={{ fontSize: 40, color: '#00D4FF' }} />,judul: 'Fitur AI',      deskripsi: 'Hapus background dan buat video dengan AI.' },
];

function Beranda({ onPindahHalaman }) {
  // useState: menyimpan teks sambutan yang berubah
  const [sambutan, setSambutan] = useState('Selamat Datang!');

  // useEffect: ubah teks sambutan setelah 2 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setSambutan('Mulai Edit Video Sekarang');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      {/* ===== HERO ===== */}
      <Box sx={{ backgroundColor: '#1C1C1C', py: 10, textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Typography variant="h3" fontWeight="bold" color="white" gutterBottom>
            {sambutan}
          </Typography>
          <Typography variant="body1" color="gray" mb={4}>
            CapCut adalah aplikasi edit video gratis yang mudah digunakan oleh siapa saja.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => onPindahHalaman('template')}
          >
            Lihat Template
          </Button>
        </Container>
      </Box>

      {/* ===== FITUR — Grid 2 kolom tetap ===== */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h5" fontWeight="bold" color="white" textAlign="center" mb={4}>
          Fitur Utama CapCut
        </Typography>

        <Grid container spacing={3}>
          {fiturList.map((f) => (
            // xs=12 → 1 kolom di HP, sm=6 → 2 kolom di tablet & desktop
            <Grid item xs={12} sm={6} key={f.judul}>
              <Card>
                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 3 }}>
                  {/* Icon di kiri */}
                  <Box sx={{ flexShrink: 0 }}>
                    {f.icon}
                  </Box>
                  {/* Teks di kanan */}
                  <Box>
                    <Typography variant="h6" color="white" fontWeight="bold" mb={0.5}>
                      {f.judul}
                    </Typography>
                    <Typography variant="body2" color="gray">
                      {f.deskripsi}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Beranda;
