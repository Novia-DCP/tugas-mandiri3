import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
} from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CheckroomIcon from '@mui/icons-material/Checkroom';

// Hanya 4 template
const semuaTemplate = [
  { id: 1, nama: 'Vlog Perjalanan',  kategori: 'Travel',  icon: <FlightIcon        sx={{ fontSize: 40, color: '#00D4FF' }} /> },
  { id: 2, nama: 'Story Makanan',    kategori: 'Makanan', icon: <LocalPizzaIcon    sx={{ fontSize: 40, color: '#00D4FF' }} /> },
  { id: 3, nama: 'Gaming Highlight', kategori: 'Gaming',  icon: <SportsEsportsIcon sx={{ fontSize: 40, color: '#00D4FF' }} /> },
  { id: 4, nama: 'Fashion Reels',    kategori: 'Fashion', icon: <CheckroomIcon     sx={{ fontSize: 40, color: '#00D4FF' }} /> },
];

function Template() {
  // useState: menyimpan teks pencarian
  const [cari, setCari] = useState('');
  // useState: menyimpan hasil filter
  const [hasil, setHasil] = useState(semuaTemplate);

  // useEffect: filter setiap kali 'cari' berubah
  useEffect(() => {
    const filtered = semuaTemplate.filter((t) =>
      t.nama.toLowerCase().includes(cari.toLowerCase()) ||
      t.kategori.toLowerCase().includes(cari.toLowerCase())
    );
    setHasil(filtered);
  }, [cari]);

  return (
    <Box sx={{ minHeight: '100vh', py: 6, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">

        {/* Judul */}
        <Typography variant="h4" fontWeight="bold" color="white" textAlign="center" mb={1}>
          Template Video
        </Typography>
        <Typography variant="body2" color="gray" textAlign="center" mb={0}>
          Pilih template favorit kamu dan mulai edit!
        </Typography>

        {/* Search Box — tanpa jarak di atas */}
        <TextField
          fullWidth
          placeholder="Cari template..."
          variant="outlined"
          value={cari}
          onChange={(e) => setCari(e.target.value)}
          sx={{ mt: 2, mb: 3 }}
        />

        {/* Grid 4 template — 2 kolom, 2 baris */}
        <Grid container spacing={3}>
          {hasil.length === 0 ? (
            <Grid item xs={12}>
              <Typography color="gray" textAlign="center" mt={4}>
                Template tidak ditemukan.
              </Typography>
            </Grid>
          ) : (
            hasil.map((t) => (
              // xs=12 → 1 kolom di HP | sm=6 → 2 kolom (2 atas, 2 bawah)
              <Grid item xs={12} sm={6} key={t.id}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    py: 4,
                    gap: 1.5,
                  }}>
                    {/* Icon MUI */}
                    {t.icon}

                    {/* Nama */}
                    <Typography variant="h6" color="white" fontWeight="bold">
                      {t.nama}
                    </Typography>

                    {/* Kategori */}
                    <Chip
                      label={t.kategori}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />

                    {/* Tombol */}
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ mt: 1 }}
                    >
                      Gunakan Template
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>

      </Container>
    </Box>
  );
}

export default Template;
