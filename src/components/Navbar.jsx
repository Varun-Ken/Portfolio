import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ['About', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: 'background.default', height: '100%' }}>
      <Typography variant="h6" sx={{ my: 2, color: 'primary.main', fontWeight: 'bold' }}>
        Portfolio.
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item} 
            component="a" 
            href={`#${item.toLowerCase()}`}
            onClick={handleDrawerToggle}
            sx={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}
          >
            <ListItemText primary={item} sx={{ color: 'text.primary' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bold', color: 'primary.main', display: 'flex', alignItems: 'center' }}
            >
              Portfolio.
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {navItems.map((item) => (
                <Button 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  sx={{ color: 'text.primary', ml: 2, '&:hover': { color: 'primary.main' } }}
                >
                  {item}
                </Button>
              ))}
              <Button variant="outlined" color="primary" sx={{ ml: 3 }}>
                Resume
              </Button>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: 'primary.main' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, borderLeft: '1px solid rgba(255, 255, 255, 0.05)' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
