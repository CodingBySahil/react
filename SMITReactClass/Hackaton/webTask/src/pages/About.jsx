import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our application! We are committed to providing you with the best service possible. Our team is dedicated to ensuring that your experience is seamless and enjoyable.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to deliver high-quality products that meet the needs of our customers. We believe in innovation, integrity, and customer satisfaction. Whether you're looking for information, support, or just want to learn more about us, you're in the right place.
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for choosing our service. We look forward to continuing to serve you and meet your expectations.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
