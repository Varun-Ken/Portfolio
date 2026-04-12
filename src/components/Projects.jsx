import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardActions, Button, Chip, Stack, List, ListItem, ListItemText, Collapse } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

// Import images from src/images
import taxbanditsLogo from '../images/taxbandits.png';
import pistusLogo from '../images/pistus.png';

const projects = [
  {
    title: 'TaxBandits API',
    description: 'TaxBandits is a payroll and employment tax filing platform that helps businesses, CPAs and tax professionals file IRS forms online — including W-2s, 1099s and 94x series forms. It handles the entire filing lifecycle from form preparation and validation to e-filing directly with the IRS and distributing recipient copies. Built for high-volume operations, it supports thousands of filings with built-in compliance checks, real-time status tracking and secure handling of sensitive financial data.',
    logo: taxbanditsLogo,
    tags: ['Next.js', 'Node.js', 'Fastify.js', 'MSSQL'],
    demoLink: '#',
    sourceLink: '#',
    achievements: [
      { action: 'Architected & shipped production-grade RESTful APIs', detail: 'handling high-volume tax filing ops — built with structured validation, clean error boundaries, handling exceptions and strict REST principles.' },
      { action: 'Cut API response time by 50%', detail: 'that wraps every sensitive financial payload in dual-layer cryptographic security — end-to-end protected, compliance-aligned, zero compromise.' },
      { action: 'Engineered hybrid RSA + AES encryption middleware', detail: 'to handle sensitive financial and taxpayer payloads — end-to-end cryptographic security, zero-trust by design and compliant with industry data protection standards.' },
      { action: 'Enforced enterprise-grade password policies at the system level', detail: 'mandatory 90-day rotation, last-3-reuse prevention, hardened credential hygiene baked into the auth pipeline by design.' }
    ]
  },
  {
    title: 'W9.io',
    description: 'W9.io is a W-9 tax form management platform designed to simplify the vendor onboarding process for businesses. Instead of chasing down paper forms or email attachments, companies can request, collect and store W-9s from contractors and vendors digitally in one centralized dashboard. It keeps businesses audit-ready by maintaining an organized, up-to-date record of vendor tax information and flagging incomplete or expired forms automatically.',
    logo: taxbanditsLogo,
    tags: ['React.js', 'Remix.js', 'Express.js', 'PostgreSQL', 'Redis', 'Supertokens'],
    demoLink: '#',
    sourceLink: '#',
    achievements: [
      { action: 'Built auth from the ground up using SuperTokens', detail: 'wiring session handling, access control, and full token lifecycle management into a seamless, production-hardened authentication flow.' },
      { action: 'Engineered hybrid RSA + AES encryption middleware', detail: 'that wraps every sensitive financial payload in dual-layer cryptographic security — end-to-end protected, compliance-aligned, zero compromise.' },
      { action: 'Deployed a Redis-backed rate limiter', detail: 'that intercepts and throttles abusive API traffic in real time — keeping the server lean, stable, and protected under high-load conditions.' },
      { action: 'Enforced enterprise-grade password policies at the system level', detail: 'mandatory 90-day rotation, last-3-reuse prevention, hardened credential hygiene baked into the auth pipeline by design.' }
    ]
  },
  // {
  //   title: 'Pistus',
  //   description: 'A futuristic tech application interface featuring dynamic data visualization, glassmorphic design elements, and complex dashboard analytics.',
  //   logo: pistusLogo,
  //   tags: ['React', 'Remix.js', 'Fastify.js'],
  //   demoLink: '#',
  //   sourceLink: '#',
  //   achievements: [
  //     { action: 'Built real-time', detail: 'dashboard analytics using Remix.js' },
  //     { action: 'Designed glassmorphism', detail: 'system resulting in a premium user experience' },
  //     { action: 'Architected backend', detail: 'service layer via Fastify.js for ultra-fast performance' }
  //   ]
  // }
];

// Variants for git log staggered typing animation
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2 } }
};

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleCardClick = (title) => {
    setExpandedId(prev => prev === title ? null : title);
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper', position: 'relative', overflow: 'hidden' }} id="projects">
      {/* Decorative blurred background element */}
      <Box 
        sx={{ 
          position: 'absolute', 
          top: '20%', 
          left: '-10%', 
          width: '500px', 
          height: '500px', 
          bgcolor: 'primary.dark', 
          filter: 'blur(150px)', 
          opacity: 0.15,
          zIndex: 0,
          pointerEvents: 'none'
        }} 
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography 
          variant="h3" 
          component={motion.h3}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center', color: 'primary.main', fontWeight: 'bold', fontSize: { xs: '2.5rem', md: '3rem' }, fontFamily: 'monospace' }}
        >
          ~/production-deployments
        </Typography>

        <Grid container spacing={4} alignItems="flex-start">
          {projects.map((project, index) => {
            const isExpanded = expandedId === project.title;

            return (
              <Grid item xs={12} md={4} key={index} 
                component={motion.div} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', md: 'auto' } }}
              >
                <Card 
                  onClick={() => handleCardClick(project.title)}
                  sx={{ 
                    width: '100%',
                    display: 'flex', 
                    flexDirection: 'column',
                    bgcolor: 'rgba(17, 34, 64, 0.6)', 
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isExpanded ? '0 10px 40px rgba(144, 202, 249, 0.15)' : 'none',
                    borderColor: isExpanded ? 'primary.main' : 'rgba(255, 255, 255, 0.05)',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 10px 40px rgba(144, 202, 249, 0.15)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ height: '0px', display: 'flex', alignItems: 'center', mb: 2 }}>
                      {/* <img 
                        src={project.logo} 
                        alt={`${project.title} logo`} 
                        style={{ maxHeight: '48px', maxWidth: '200px', objectFit: 'contain' }} 
                      /> */}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 3 }}>
                      {project.title}
                    </Typography>

                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.6 }}>
                      {project.description}
                    </Typography>
                    
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {project.tags.map((tag) => (
                        <Chip 
                          key={tag} 
                          label={tag} 
                          size="small" 
                          sx={{ 
                            bgcolor: 'rgba(144, 202, 249, 0.1)', 
                            color: 'primary.main', 
                            border: '1px solid rgba(144, 202, 249, 0.2)',
                            fontWeight: 'bold',
                            mb: 1
                          }} 
                        />
                      ))}
                    </Stack>
                  </CardContent>

                  {!isExpanded && (
                    <CardActions sx={{ p: 4, pt: 0, justifyContent: 'flex-start' }}>
                      <Box sx={{ display: 'inline-flex', alignItems: 'center', bgcolor: 'rgba(0,0,0,0.3)', px: 2, py: 0.8, borderRadius: 1, border: '1px solid rgba(255,255,255,0.05)', transition: 'background-color 0.3s', '&:hover': { bgcolor: 'rgba(144,202,249,0.1)' } }}>
                        <Typography sx={{ fontFamily: 'monospace', color: 'secondary.main', mr: 1, fontSize: '0.85rem' }}>$</Typography>
                        <Typography sx={{ fontFamily: 'monospace', color: '#e6edf3', fontSize: '0.85rem', letterSpacing: 0.5 }}>
                          git log --author="me"
                        </Typography>
                        {/* <motion.span 
                          animate={{ opacity: [1, 0, 1] }} 
                          transition={{ repeat: Infinity, duration: 1 }}
                          style={{ width: '8px', height: '14px', backgroundColor: '#e6edf3', marginLeft: '6px', display: 'inline-block' }}
                        /> */}
                        <Typography sx={{ fontFamily: 'monospace', color: 'primary.main', fontSize: '0.75rem', ml: 3, textTransform: 'uppercase', letterSpacing: 1, opacity: 0.8, fontWeight: 'bold' }}>
                          [ Click to Execute ]
                        </Typography>
                      </Box>
                    </CardActions>
                  )}

                  {/* Inline Collapse for expanding the log */}
                  <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                    <Box onClick={(e) => e.stopPropagation()} sx={{ p: 4, bgcolor: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Typography sx={{ fontFamily: 'monospace', color: 'secondary.main', mr: 1, fontSize: '1.2rem', fontWeight: 'bold' }}>$</Typography>
                        <Typography sx={{ fontFamily: 'monospace', color: '#e6edf3', fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: 0.5 }}>
                          ./what-i-shipped
                        </Typography>
                        <motion.span 
                          animate={{ opacity: [1, 0, 1] }} 
                          transition={{ repeat: Infinity, duration: 1 }}
                          style={{ width: '10px', height: '18px', backgroundColor: '#e6edf3', marginLeft: '8px', display: 'inline-block' }}
                        />
                      </Box>
                      
                      {/* Animated Log List */}
                      <List 
                        disablePadding 
                        component={motion.div} 
                        variants={listVariants} 
                        initial="hidden" 
                        animate="visible"
                      >
                        {project.achievements.map((item, i) => (
                          <ListItem 
                            key={i} 
                            component={motion.div} 
                            variants={itemVariants}
                            sx={{ px: 0, py: 1, alignItems: 'flex-start' }}
                          >
                            <ListItemText 
                              primary={
                                <>
                                  <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main', fontWeight: 'bold', fontSize: '0.9rem' }}>{`> ${item.action}: `}</Typography>
                                  <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>{item.detail}</Typography>
                                </>
                              }
                              primaryTypographyProps={{ lineHeight: 1.6 }} 
                            />
                          </ListItem>
                        ))}
                      </List>

                      {/* <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                        <Button 
                          startIcon={<GitHubIcon />} 
                          variant="outlined" 
                          color="primary" 
                          size="small" 
                          sx={{ borderRadius: 2 }}
                        >
                          Source
                        </Button>
                        <Button 
                          startIcon={<LaunchIcon />} 
                          variant="contained" 
                          color="primary" 
                          size="small" 
                          sx={{ borderRadius: 2, color: '#0a192f', fontWeight: 'bold' }}
                        >
                          Live App
                        </Button>
                      </Stack> */}
                    </Box>
                  </Collapse>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
