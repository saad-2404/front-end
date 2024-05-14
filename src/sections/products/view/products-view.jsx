import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { fetchData } from 'src/_mock/products';


// import ProductCard from '../product-card';
import ProductSort from '../product-sort';
import ProductFilters from '../product-filters';
import ProductCartWidget from '../product-cart-widget';


export default function ProductsView() {
  const [openFilter, setOpenFilter] = useState(false);
  const [audioData, setAudioData] = useState([]);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  useEffect(() => {
    const fetchAudioData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/audio');
        setAudioData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setAudioData([]);
      }
    };

    fetchAudioData();
  }, []);


  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Audios
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />

          <ProductSort />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {Array.isArray(audioData) &&
        audioData.map((audio, index) => (
          <Grid key={index} xs={12} sm={6} md={3}>
           <audio controls>
           <track kind="captions" />
           <source src={`data:audio/mpeg;base64,${audio}`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
          </Grid>
        ))}
      </Grid>

      <ProductCartWidget />
    </Container>
  );
}
