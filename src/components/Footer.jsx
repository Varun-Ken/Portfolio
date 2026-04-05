import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ py: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <Typography variant="body2" color="text.secondary">© 2026 Portfolio. Built with React & MUI.</Typography>
    </Box>
  );
};

export default Footer;
