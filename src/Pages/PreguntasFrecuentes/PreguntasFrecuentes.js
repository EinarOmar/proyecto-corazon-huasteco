import React from 'react'
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { AccordionDes } from './AccordionDes';

export const PreguntasFrecuentes = () => {
  return (
    <div>
        <Box sx={{p:2}}>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
            <Link to="/inicio" style={{color: "inherit"}}>
                INICIO
            </Link>
            <Typography color="text.primary"> PREGUNTAS FRECUENTES</Typography>
            </Breadcrumbs>
        </Box>
        <Box sx={{margin:"15px"}}>
            <Box sx={{display: "flex", flexFlow: "column wrap", alignItems: "center"}}>
            <Typography variant="h5" color="initial" sx={{mb:5}}>
                Preguntas frecuentes
            </Typography>

            <AccordionDes/>

            </Box>
        </Box>
    </div>
  )
}
