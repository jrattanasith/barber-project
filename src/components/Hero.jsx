import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export default function Hero() {
  return (
    <Box
      sx={{
        height: '80vh', // adjust height as needed
        backgroundImage: 'url(/images/hero-bg.jpg)', // replace with your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Container>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Barber specializing in modern styles.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Every cut is done by me — focused, detailed, and tailored to you.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Book Now
        </Button>
      </Container>
    </Box>
  );
}
