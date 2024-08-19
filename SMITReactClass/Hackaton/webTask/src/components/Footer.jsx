import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 3,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1">
          © {new Date().getFullYear()} My Company. All rights reserved.
        </Typography>
        <Typography variant="body2">
          <Link href="https://www.example.com/terms" color="inherit">
            Terms of Service
          </Link>{' '}
          |{' '}
          <Link href="https://www.example.com/privacy" color="inherit">
            Privacy Policy
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
