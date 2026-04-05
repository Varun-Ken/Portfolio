import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const experiences = [
  {
    company: 'SPAN Technology Services',
    period: 'August 2025 - Present',
    role: 'Software Engineer',
    description: 'A key technical contributor, building and optimizing robust full-stack solutions and ensuring modern architectural best practices.'
  },
  {
    company: 'Adela Software and Services',
    period: 'June 2023 - July 2025',
    role: 'Software Engineer',
    description: 'Developed scalable backend APIs and crafted highly responsive, state-of-the-art frontend user interfaces.'
  }
];

const About = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 14 }, bgcolor: 'background.default', position: 'relative' }} id="about">
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">

          {/* Left Column: Bio Placeholder */}
          <Grid item xs={12} md={6} component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 3, fontFamily: 'monospace' }}>
              README.md
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8 }}>
              Software Engineer who likes working close to the metal. I spend most of my time on the backend — designing APIs, thinking through security and making sure systems hold up under pressure. I care about writing code that's fast, safe, and maintainable — not just code that works.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8 }}>
             I gravitate toward the hard problems: performance bottlenecks, cryptographic security, real-time observability and abuse prevention. The kind of things that don't show up on the surface but matter the most in production.
            </Typography>
          </Grid>

          {/* Right Column: Roadmap / Experience Timeline */}
          <Grid item xs={12} md={6} component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card sx={{
              bgcolor: 'rgba(17, 34, 64, 0.4)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(144, 202, 249, 0.2)',
              borderRadius: 3,
              overflow: 'hidden'
            }}>
              {/* Terminal Top Bar */}
              <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'rgba(0,0,0,0.5)', px: 2, py: 1.5, borderBottom: '1px solid rgba(144, 202, 249, 0.1)' }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ff5f56' }} />
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#27c93f' }} />
                </Box>
                <Typography sx={{ mx: 'auto', fontFamily: 'monospace', fontSize: '12px', color: 'text.secondary' }}>career_log.exe</Typography>
              </Box>

              <Box sx={{ p: { xs: 3, sm: 5 } }}>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 5 }}>
                  <Typography sx={{ fontFamily: 'monospace', color: 'secondary.main', mr: 1.5, fontSize: '1rem' }}>$</Typography>
                  <Typography sx={{ fontFamily: 'monospace', color: '#e6edf3', fontWeight: 'bold', fontSize: '1rem', letterSpacing: 0.5 }}>
                    git log --grep="Career"
                  </Typography>
                  <motion.span 
                    animate={{ opacity: [1, 0, 1] }} 
                    transition={{ repeat: Infinity, duration: 1 }}
                    style={{ width: '8px', height: '16px', backgroundColor: '#e6edf3', marginLeft: '6px', display: 'inline-block' }}
                  />
                </Box>

                <Box sx={{ ml: 1 }}>
                  {experiences.map((exp, index) => (
                    <Box key={index} sx={{ display: 'flex', position: 'relative', mb: index === experiences.length - 1 ? 0 : 5 }}>
                      
                      {/* Git Branch Vertical Line */}
                      {index !== experiences.length - 1 && (
                        <Box sx={{
                          position: 'absolute',
                          top: '24px',
                          bottom: '-40px',
                          left: '6px',
                          width: '2px',
                          bgcolor: 'secondary.main',
                          opacity: 0.4
                        }} />
                      )}

                      {/* Git Commit Node */}
                      <Box sx={{
                        width: '14px', height: '14px', borderRadius: '50%',
                        bgcolor: 'background.paper',
                        border: '3px solid', borderColor: 'secondary.main',
                        zIndex: 1, mr: 4, flexShrink: 0, mt: '6px'
                      }} />

                      {/* Branch Content */}
                      <Box sx={{ flexGrow: 1, mt: -0.5 }}>
                        <Typography sx={{ fontFamily: 'monospace', color: '#ff7b72', mb: 1, fontSize: '0.85rem' }}>
                          commit {Math.random().toString(16).slice(2, 9)}
                        </Typography>
                        
                        <Typography sx={{ fontFamily: 'monospace', color: 'text.primary', fontWeight: 'bold', fontSize: '1.2rem', mb: 1 }}>
                          feat({exp.company.split(' ')[0].toLowerCase()}): {exp.role.toLowerCase().replace(/ /g, '_')}
                        </Typography>
                        
                        <Typography sx={{ fontFamily: 'monospace', color: 'primary.light', mb: 0.5, fontSize: '0.9rem' }}>
                          Author: {exp.company}
                        </Typography>
                        
                        <Typography sx={{ fontFamily: 'monospace', color: 'text.secondary', mb: 3, fontSize: '0.9rem' }}>
                          Date:   {exp.period}
                        </Typography>
                        
                        <Typography sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: '0.95rem' }}>
                          {exp.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default About;
