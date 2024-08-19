import React from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 5,
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          type="email"
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
        />
        
        <Button variant="contained" color="primary" size="large" type="submit">
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;
