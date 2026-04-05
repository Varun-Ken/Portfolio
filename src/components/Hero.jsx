import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';

const floatingSnippets = [
  'app.use(helmet())',
  'req.rateLimit',
  'await db.transaction()',
  'redis.get("cache_key")',
  'SELECT * FROM users',
  'module.exports = server',
  'crypto.createCipheriv()',
  'kubernetes.apply()'
];

const TypewriterText = ({ text, delay = 0, ...props }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText((prev) => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);
      return () => clearInterval(typingInterval);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return <Typography {...props}>{displayText}<motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}>_</motion.span></Typography>;
};

const Hero = () => {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        bgcolor: '#0a192f',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 12 }
      }} 
      id="hero"
    >
      {/* Animated Background Grid & Snippets */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.03, pointerEvents: 'none' }}>
        <Box sx={{ width: '100%', height: '100%', backgroundImage: 'linear-gradient(rgba(144, 202, 249, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(144, 202, 249, 0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </Box>

      {floatingSnippets.map((snippet, i) => (
        <Typography 
          key={i}
          component={motion.span}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{ y: '-10vh', opacity: [0, 0.2, 0] }}
          transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, delay: Math.random() * 10, ease: 'linear' }}
          sx={{
            position: 'absolute',
            left: `${10 + Math.random() * 80}%`,
            fontFamily: 'monospace',
            color: 'primary.main',
            fontSize: '14px',
            pointerEvents: 'none'
          }}
        >
          {snippet}
        </Typography>
      ))}

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <Box sx={{ mb: 2 }}>
            <TypewriterText 
              text="> Hi, I'm Varun K 👋" 
              variant="h3" 
              sx={{ fontFamily: 'monospace', color: 'primary.main', fontWeight: 'bold' }} 
            />
          </Box>
          
          <Typography 
            variant="h4" 
            sx={{ fontWeight: 800, color: 'text.primary', mb: 5, lineHeight: 1.4, fontSize: { xs: '1.8rem', md: '2.5rem' } }}
          >
            A Software Engineer with a deep-rooted passion for backend engineering.
          </Typography>

          {/* Terminal / Code Window for the long text */}
          <Box 
            component={motion.div}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            sx={{ 
              bgcolor: 'rgba(17, 34, 64, 0.8)', 
              borderRadius: 3, 
              border: '1px solid rgba(144, 202, 249, 0.2)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              overflow: 'hidden',
              mb: 6
            }}
          >
            {/* Terminal Top Bar */}
            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'rgba(0,0,0,0.5)', px: 2, py: 1.5, borderBottom: '1px solid rgba(144, 202, 249, 0.1)' }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ff5f56' }} />
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#27c93f' }} />
              </Box>
              <Typography sx={{ mx: 'auto', fontFamily: 'monospace', fontSize: '12px', color: 'text.secondary' }}>varun_k_portfolio.exe</Typography>
            </Box>

            {/* Terminal Body */}
            <Box sx={{ p: { xs: 3, md: 4 } }}>
              
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontFamily: 'monospace', color: 'secondary.main', mb: 1, fontSize: '0.9rem' }}>
                  // The Journey
                </Typography>
                <Typography sx={{ color: 'text.primary', fontWeight: 500, lineHeight: 1.8, fontSize: '1.05rem' }}>
                  I started my journey building responsive frontends with React.js and Next.js — but it was designing the systems behind the interface that truly captured me. The logic, the architecture, the performance, the security — that's where I live.
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontFamily: 'monospace', color: 'secondary.main', mb: 1, fontSize: '0.9rem' }}>
                  // The Specialization
                </Typography>
                <Typography sx={{ color: 'text.primary', fontWeight: 500, lineHeight: 1.8, fontSize: '1.05rem' }}>
                  Today I specialize in building production-grade RESTful APIs, engineering secure middleware layers and optimizing backend systems for real-world performance. I've built platforms from scratch, secured sensitive financial data with enterprise-grade encryption, defended APIs against abuse with Redis-backed rate limiting and consistently delivered systems that handle high-volume traffic without breaking a sweat.
                </Typography>
              </Box>

              <Box>
                <Typography sx={{ fontFamily: 'monospace', color: 'secondary.main', mb: 1, fontSize: '0.9rem' }}>
                  // The Philosophy
                </Typography>
                <Typography sx={{ color: 'text.primary', fontWeight: 500, lineHeight: 1.8, fontSize: '1.05rem' }}>
                  Because I believe great backend engineering isn't just about making things work — it's about making things work reliably, securely and at scale.
                </Typography>
              </Box>

            </Box>
          </Box>

          <Stack direction="row" spacing={3} sx={{ mt: 2 }}>
            <Button 
              variant="contained" 
              size="large" 
              startIcon={<StorageIcon />}
              href="#projects"
              sx={{ px: 4, py: 1.5, borderRadius: '50px', fontWeight: 'bold' }}
            >
              View System Log (Projects)
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              startIcon={<TerminalIcon />}
              href="#about"
              sx={{ px: 4, py: 1.5, borderRadius: '50px', fontWeight: 'bold', '&:hover': { bgcolor: 'rgba(144, 202, 249, 0.1)' } }}
            >
              Execute Profile
            </Button>
          </Stack>

        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
