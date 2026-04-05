import React from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';

const skills = [
  { name: 'React.js', category: 'Frontend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', bg: 'transparent' },
  { name: 'Next.js', category: 'Frontend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', bg: 'white' },
  { name: 'Remix.js', category: 'Frontend', img: 'https://cdn.simpleicons.org/remix/111111', bg: 'white' },
  { name: 'Node.js', category: 'Backend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', bg: 'transparent' },
  { name: 'Express.js', category: 'Backend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', bg: 'white' },
  { name: 'Fastify.js', category: 'Backend', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-plain.svg', bg: 'white' },
  { name: 'MSSQL', category: 'Database', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg', bg: 'transparent' },
  { name: 'PostgreSQL', category: 'Database', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', bg: 'transparent' }
];

const Skills = () => {
  return (
    <Box sx={{ py: 12, bgcolor: 'background.default', overflow: 'hidden' }} id="skills">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component={motion.h3}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{ mb: 8, textAlign: 'center', color: 'primary.main', fontWeight: 'bold', fontFamily: 'monospace' }}
        >
          _package.json
        </Typography>

        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            style={{ paddingBottom: '50px', paddingTop: '20px' }}
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index} style={{ width: '280px' }}>
                <Card
                  sx={{
                    height: '360px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 4,
                    background: 'linear-gradient(145deg, rgba(17, 34, 64, 0.7) 0%, rgba(10, 25, 47, 0.9) 100%)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 5,
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                    overflow: 'visible',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 15px 45px rgba(144, 202, 249, 0.2), inset 0 0 20px rgba(144, 202, 249, 0.05)',
                      transform: 'translateY(-15px) scale(1.02)'
                    },
                    '&:hover .icon-box': {
                      transform: 'scale(1.1) rotate(5deg)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                    }
                  }}
                >
                  <Box
                    className="icon-box"
                    sx={{
                      width: 130,
                      height: 130,
                      bgcolor: skill.bg === 'transparent' ? 'rgba(255,255,255,0.03)' : skill.bg,
                      borderRadius: '25%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 5,
                      p: skill.bg !== 'transparent' ? 2 : 2.5,
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      border: skill.bg === 'transparent' ? '1px solid rgba(255,255,255,0.1)' : 'none',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                    }}
                  >
                    <img
                      src={skill.img}
                      alt={skill.name}
                      style={{ width: '100%', height: 'auto', maxHeight: '90px', objectFit: 'contain' }}
                    />
                  </Box>
                  <CardContent sx={{ p: 0, textAlign: 'center', '&:last-child': { pb: 0 } }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: '800',
                        mb: 1,
                        letterSpacing: '-0.5px',
                        background: 'linear-gradient(90deg, #ffffff, #aab4d8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {skill.name}
                    </Typography>
                    <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: 3, fontWeight: 'bold' }}>
                      {skill.category}
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
