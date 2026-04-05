import React from 'react';
import { Box, Typography, Container, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#0a192f', position: 'relative' }} id="contact">
       <Container maxWidth="md">
         
         <Typography 
           variant="h3" 
           component={motion.h3}
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           sx={{ textAlign: 'center', mb: 6, color: 'primary.main', fontWeight: 'bold' }}
         >
           Init Connection
         </Typography>

         <Box 
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{ 
              bgcolor: 'rgba(17, 34, 64, 0.8)', 
              borderRadius: 3, 
              border: '1px solid rgba(144, 202, 249, 0.2)',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            }}
          >
            {/* Terminal Top Bar */}
            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'rgba(0,0,0,0.5)', px: 2, py: 1.5, borderBottom: '1px solid rgba(144, 202, 249, 0.1)' }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ff5f56' }} />
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#27c93f' }} />
              </Box>
              <Typography sx={{ mx: 'auto', fontFamily: 'monospace', fontSize: '12px', color: 'text.secondary' }}>contact_module.sh</Typography>
            </Box>

            <Box sx={{ p: { xs: 3, md: 5 } }}>
              <Typography sx={{ fontFamily: 'monospace', color: 'secondary.main', mb: 2, fontSize: '1.1rem' }}>
                $ ping varun-k.dev
              </Typography>
              
              <Typography sx={{ fontFamily: 'monospace', color: 'text.secondary', mb: 4, pl: 2, borderLeft: '2px solid rgba(144,202,249,0.3)', ml: 1, lineHeight: 1.6 }}>
                Status: 200 OK<br/>
                Response: I am currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </Typography>

              <Typography sx={{ fontFamily: 'monospace', color: 'secondary.main', mb: 2, fontSize: '1.1rem' }}>
                $ cat credentials.json
              </Typography>

              <Box sx={{ bgcolor: 'rgba(0,0,0,0.3)', p: { xs: 2, md: 3 }, borderRadius: 2, border: '1px solid rgba(255,255,255,0.05)', fontFamily: 'monospace', overflowX: 'auto' }}>
                <Typography sx={{ color: '#e6edf3' }}>{'{'}</Typography>
                
                <Box sx={{ pl: { xs: 2, md: 4 }, display: 'flex', alignItems: 'flex-start', my: 1.5 }}>
                  <Typography sx={{ color: '#ff7b72', minWidth: '80px' }}>"email"</Typography>
                  <Typography sx={{ color: '#e6edf3', mx: 1 }}>:</Typography>
                  <Typography 
                    component="a" 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=varun.kenn@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'primary.light', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    "varun.kenn@gmail.com"
                  </Typography>
                  <Typography sx={{ color: '#e6edf3' }}>,</Typography>
                </Box>
                
                <Box sx={{ pl: { xs: 2, md: 4 }, display: 'flex', alignItems: 'flex-start', my: 1.5 }}>
                  <Typography sx={{ color: '#ff7b72', minWidth: '80px' }}>"linkedin"</Typography>
                  <Typography sx={{ color: '#e6edf3', mx: 1 }}>:</Typography>
                  <Typography 
                    component="a" 
                    href="http://www.linkedin.com/in/varun-ken"
                    target="_blank"
                    sx={{ color: 'primary.light', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    "linkedin.com/in/varun-ken"
                  </Typography>
                </Box>

                <Typography sx={{ color: '#e6edf3' }}>{'}'}</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mt: 5, pt: 4, borderTop: '1px dashed rgba(255,255,255,0.1)' }}>
                 <Typography sx={{ fontFamily: 'monospace', color: 'secondary.main', mr: 2, fontSize: '1.1rem' }}>
                  $ exit
                </Typography>
                 
                 <Stack direction="row" spacing={2} sx={{ ml: 'auto' }}>
                    <IconButton component="a" href="https://mail.google.com/mail/?view=cm&fs=1&to=varun.kenn@gmail.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'text.secondary', border: '1px solid rgba(255,255,255,0.05)', '&:hover': { color: 'primary.main', bgcolor: 'rgba(144, 202, 249, 0.1)', borderColor: 'primary.main' } }}>
                      <EmailIcon />
                    </IconButton>
                    <IconButton component="a" href="http://www.linkedin.com/in/varun-ken" target="_blank" rel="noopener noreferrer" sx={{ color: 'text.secondary', border: '1px solid rgba(255,255,255,0.05)', '&:hover': { color: 'primary.main', bgcolor: 'rgba(144, 202, 249, 0.1)', borderColor: 'primary.main' } }}>

                      <LinkedInIcon />
                    </IconButton>
                    <IconButton component="a" href="https://github.com" target="_blank" sx={{ color: 'text.secondary', border: '1px solid rgba(255,255,255,0.05)', '&:hover': { color: 'primary.main', bgcolor: 'rgba(144, 202, 249, 0.1)', borderColor: 'primary.main' } }}>
                      <GitHubIcon />
                    </IconButton>
                 </Stack>
              </Box>
            </Box>
         </Box>
         
         <Typography sx={{ textAlign: 'center', color: 'text.secondary', fontFamily: 'monospace', mt: 8, fontSize: '0.85rem', opacity: 0.7 }}>
           System Shutdown • Built by Varun K © 2026
         </Typography>
       </Container>
    </Box>
  );
};

export default Contact;
