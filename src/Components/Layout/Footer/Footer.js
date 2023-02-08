import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import { Facebook } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';

const LinkStyled = styled(Link)({
    display: "block", 
    color: '#D9CAAD', 
    textDecoration: "none",

    '&:hover': {
        color: '#D9CAAD',
    },
})

export const Footer = () => {
  return (
    <Box sx={{display: "flex", flexFlow: "column wrap", backgroundColor: 'primary.main', paddingTop: "1.8rem"}}> 
        <Box sx={{ display: "flex", justifyContent: "space-around"}}>
            <Box>
                <Typography variant="h6" color='primary.light' component="h6">Categorias</Typography>
                <Typography variant="body1" className="footer-menu">
                    <LinkStyled to="tematicas/vestimenta">Vestimenta</LinkStyled>
                    <LinkStyled to="tematicas/danza">Danza</LinkStyled>
                    <LinkStyled to="tematicas/gastronomia">Gastronomia</LinkStyled>
                    <LinkStyled to="tematicas/musica">Música</LinkStyled>
                    <LinkStyled to="tematicas/tradiciones">Tradiciones</LinkStyled>
                </Typography>
            </Box>

            <Box>
                <Typography variant="h6" color='primary.light' component="h6">Sobre nosotros</Typography>
                <Typography variant='body1' className="footer-menu">
                    <LinkStyled to="sobre-nosotros">Nuestra historia</LinkStyled>
                    <LinkStyled to="sobre-nosotros">Misión, visión y valores</LinkStyled>
                    <LinkStyled to="sobre-nosotros">Carreras</LinkStyled>
                    <LinkStyled to="aviso-de-privacidad">Politicas de privacidad</LinkStyled>
                    <LinkStyled to="aviso-de-privacidad">Terminos del servicio</LinkStyled>            
                </Typography>
            </Box>

            <div>
                <Typography variant="h6" color='primary.light' component="h6">Soporte</Typography>
                <nav className="footer-menu">
                    <LinkStyled to="preguntas-frecuentes">Preguntas frecuentes</LinkStyled>
                    <LinkStyled to="#">Ayuda en linea</LinkStyled>
                    <LinkStyled to="#">Confianza y seguridad</LinkStyled>
                </nav>
            </div>
        </Box>

        <Typography variant="caption" sx={{color: 'primary.light', backgroundColor: 'primary.main', paddingBottom: "50px",  textAlign: "center", marginTop: "4rem"}}>
            Todos los derechos reservados &#169; 2022
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Facebook/>
                <Twitter/>
                <Instagram/>
            </Box>
            
        </Typography>
        
    </Box>
  )
}
