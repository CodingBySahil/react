import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import topImage from '../assets/hereImg.png';  // Adjust the path based on your file structure

const Home = () => {
  return (
    <Box>
      {/* Image at the top */}
      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <img 
          src={topImage} 
          alt="Top visual" 
          style={{ 
            width: '100%', 
            height: '50vh', 
            display: 'block', 
            objectFit: 'cover',
            marginTop: '2em' 
          }} 
        />
      </Box>
      <Container maxWidth="md" sx={{ mt: 4, mb:4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Our Website
        </Typography>
        <Typography variant="h5" paragraph>
          Discover our amazing products and services that will help you achieve your goals.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
