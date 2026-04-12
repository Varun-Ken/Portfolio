import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const experiences = [
  {
    company: 'SPAN Technology Services',
    period: 'August 2025 - Present',
    role: 'Software Engineer',
    commitHash: '5e25989',
    details: [
      'Built production RESTful APIs for high-volume tax filing on TaxBandits',
      'Boosted API response time by 50% via concurrent async operations',
      'Designed RSA + AES hybrid encryption middleware for taxpayer data',
      'Engineered exception mail logger for real-time runtime error alerts',
      'Implemented SuperTokens auth on W9.io — session, tokens, access control',
      'Built Redis-backed rate limiter to defend against brute-force attacks',
      'Enforced 90-day password rotation + last-3 reuse prevention policy'
    ],
    stats: [
      { highlight: '50%', text: 'faster APIs' },
      { highlight: 'Real-Time', text: 'Error alerts' },
      { highlight: 'E2E', text: 'encryption' }
    ],
    techStack: [
      { name: 'Node.js', color: '#3fb950' },
      { name: 'Fastify.js', color: '#3fb950' },
      { name: 'Express.js', color: '#3fb950' },
      { name: 'PostgreSQL', color: '#d2a8ff' },
      { name: 'Microsoft SQL', color: '#d2a8ff' },
      { name: 'RSA/AES', color: '#ff7b72' },
      { name: 'SuperTokens', color: '#ff7b72' },
      { name: 'Redis', color: '#ff7b72' }
    ]
  },
  {
    company: 'Adela Software and Services',
    period: 'June 2023 - July 2025',
    role: 'Software Engineer',
    commitHash: '054e244',
    details: [
      'Migrated legacy PHP/Bootstrap shift scheduler → React + Tailwind + Node.js',
      'Reduced maintenance overhead by 40%, eliminated critical technical debt',
      'Developed scalable backend APIs and responsive frontend interfaces',
      'Built full MERN e-commerce platform with multi-vendor support',
      'Implemented JWT authentication + RBAC for admin and customer roles',
      'Ensured 100% privilege separation across 2 distinct user roles'
    ],
    stats: [
      { highlight: 'JWT', text: 'Auth' },
      { highlight: 'RBAC', text: 'enforced' },
      { highlight: '40%', text: 'less tech debt' }
    ],
    techStack: [
      { name: 'React.js', color: '#79c0ff' },
      { name: 'Tailwind CSS', color: '#79c0ff' },
      { name: 'Node.js', color: '#3fb950' },
      { name: 'Express.js', color: '#3fb950' },
      { name: 'MongoDB', color: '#d2a8ff' },
      { name: 'Microsoft SQL', color: '#d2a8ff' },
      { name: 'JWT', color: '#ff7b72' }
    ]
  }
];

const About = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 14 }, bgcolor: 'background.default', position: 'relative' }} id="about">
      <Container maxWidth="md">
        <Grid container spacing={8} alignItems="center" direction="column">

          {/* Left Column: Bio Placeholder */}
          <Grid item xs={12} component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
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
          <Grid item xs={12} component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            sx={{ width: '100%' }}
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
                    git log --grep="Career" --stat
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
                          bottom: '-60px',
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
                        <Typography sx={{ fontFamily: 'monospace', color: '#ff7b72', mb: 1.5, fontSize: '0.9rem' }}>
                          commit {exp.commitHash}
                        </Typography>
                        
                        <Typography sx={{ fontFamily: 'monospace', color: '#e6edf3', fontWeight: 'bold', fontSize: '1.2rem', mb: 1 }}>
                          feat({exp.company.split(' ')[0].toLowerCase()}): {exp.role.toLowerCase().replace(/ /g, '_')}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1, sm: 3 }, mb: 3 }}>
                          <Typography sx={{ fontFamily: 'monospace', color: '#79c0ff', fontSize: '0.9rem' }}>
                            Author: {exp.company}
                          </Typography>
                          <Typography sx={{ fontFamily: 'monospace', color: 'text.secondary', fontSize: '0.9rem' }}>
                            Date: {exp.period}
                          </Typography>
                        </Box>
                        
                        <Box sx={{ mb: 3 }}>
                          {exp.details.map((detail, i) => (
                            <Typography key={i} sx={{ fontFamily: 'monospace', color: 'text.secondary', fontSize: '0.9rem', mb: 1.2, display: 'flex' }}>
                              <Box component="span" sx={{ color: '#3fb950', mr: 2, fontWeight: 'bold' }}>+</Box> {detail}
                            </Typography>
                          ))}
                        </Box>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 3 }}>
                          {exp.stats.map((stat, i) => (
                            <Typography key={i} sx={{ fontFamily: 'monospace', color: 'text.secondary', fontSize: '0.9rem' }}>
                              <Box component="span" sx={{ color: '#3fb950' }}>{stat.highlight}</Box> {stat.text}
                            </Typography>
                          ))}
                        </Box>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                          {exp.techStack.map((tech, i) => (
                            <Box key={i} sx={{ 
                              px: 1.5, py: 0.5, 
                              border: '1px solid', borderColor: tech.color, 
                              borderRadius: '12px', 
                              display: 'flex', alignItems: 'center' 
                            }}>
                              <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: tech.color }}>
                                {tech.name}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
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
