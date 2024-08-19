import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', mt: 10 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" paragraph>
          Oops! The page you’re looking for doesn’t exist.
        </Typography>
        <Button variant="contained" color="primary" component={RouterLink} to="/">
          Go Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
