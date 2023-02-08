import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FlagIcon from '@mui/icons-material/Flag';



export const NavBar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;



  return (
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component="div" sx={{display: "flex", width: "100%", flexFlow: "column wrap"}}>
            <Box component="div" sx={{display: "flex", paddingTop: "15px"}}>
                <NavLink to="/inicio"  style={{fontSize: "20px", fontFamily: "monospace", fontWeight: "700", color: "inherit", textDecoration: "none", padding: "5px"}}>
                  CORAZÓN HUASTECO 
                </NavLink>
                <FavoriteIcon fontSize='large' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, padding: "5px" }} />  
            </Box>

            <Box component="div" sx={{display: "flex", padding: "0"}}>
              <Box sx={{ flexGrow: 1, display: "flex" }}>
                  <Button  endIcon={<ArrowDropDownIcon/>} onClick={handleClick}  style={{marginTop: "25px", textTransform: "capitalize", fontSize: "14px", fontFamily: "roboto", color: "inherit", padding: "6px 8px", margin: "22px 0px", textDecoration: "none", height: "20px"}}>
                    Tematicas              
                  </Button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <Typography sx={{ p: 2 }}>
                      <Box sx={{display: "flex", flexFlow: "column wrap"}}>
                        <NavLink to="/tematicas/vestimenta" onClick={handleClose} style={{fontSize: "14px", fontFamily: "roboto", color: "inherit",  margin: "5px", textDecoration: "none"}}>
                          <CheckroomIcon/> Vestimenta
                        </NavLink>
                        <NavLink to="/tematicas/danza" onClick={handleClose} style={{fontSize: "14px", fontFamily: "roboto", color: "inherit",  margin: "5px", textDecoration: "none"}}>
                          <EmojiPeopleIcon/> Danza
                        </NavLink>
                        <NavLink to="/tematicas/gastronomia" onClick={handleClose} style={{fontSize: "14px", fontFamily: "roboto", color: "inherit",  margin: "5px", textDecoration: "none"}}>
                          <RestaurantIcon/> Gastronomia
                        </NavLink>
                        <NavLink to="/tematicas/musica" onClick={handleClose} style={{fontSize: "14px", fontFamily: "roboto", color: "inherit",  margin: "5px", textDecoration: "none"}}>
                        <MusicNoteIcon/> Musica 
                        </NavLink>
                        <NavLink to="/tematicas/tradiciones" onClick={handleClose} style={{fontSize: "14px", fontFamily: "roboto", color: "inherit",  margin: "5px", textDecoration: "none"}}>
                        <FlagIcon/> Tradiciones 
                        </NavLink>
                      </Box>
                    </Typography>
                  </Popover>

                  <NavLink to="/sobre-nosotros"  style={{fontSize: "14px", fontFamily: "roboto", color: "inherit", padding: "6px 8px", margin: "16px 0px", textDecoration: "none", height: "20px"}}>
                    Sobre Nosotros
                  </NavLink>

                  <NavLink to="/donaciones"  style={{fontSize: "14px", fontFamily: "roboto", color: "inherit", padding: "6px 8px", margin: "16px 0px", textDecoration: "none", height: "20px"}}>
                    Donaciones
                  </NavLink>

                  <NavLink to="/creadores-de-contenido"  style={{fontSize: "14px", fontFamily: "roboto", color: "inherit", padding: "6px 8px", margin: "16px 0px", textDecoration: "none", height: "20px"}}>
                    Creadores de contenido
                  </NavLink>

                  <NavLink to="/tienda"  style={{fontSize: "14px", fontFamily: "roboto", color: "inherit", padding: "6px 8px", margin: "16px 0px", textDecoration: "none", height: "20px"}}>
                    Tienda
                  </NavLink>
              </Box>

              <Box sx={{ flexGrow: 0, display: "flex"}}>
               
                  <IconButton>
                    <NavLink to="acceso" variant='contained' 
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "16px",
                        padding: "0 10px",
                        borderRadius: "5px",
                        
                        textTransform: "capitalize", 
                        
                      }}>Inicia sesión</NavLink>
                    
                  </IconButton>
           
                
              </Box>
            </Box>
          </Box>

          {/**E L E M E N T O S     R E S P O N S I V E */}
          {/**
           * 
           * 
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, backgroundColor: "red" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <FavoriteIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          * 
          * 
          */}
          
        </Toolbar>
      </Container>
    </AppBar>
  )
}
