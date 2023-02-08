import { Typography, Box, Button } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React from 'react'
import { Link } from 'react-router-dom'
import img404 from "./ImagenError404_v2.png"

export const Error = () => {
  return (
    <Box sx={{
      display: "flex",
      width: "100%",
      minHeight: "35rem",
      justifyContent: "center",
      alignItems: "center",
      flexFlow: "row wrap"
    }}>
        <Box>
            <Typography variant="h1" color="initial" align='center'>¡Oops!</Typography>
            <Typography variant="body1" color="initial" sx={{fontSize: "25px"}}>No hemos podido encontrar esta página</Typography>
            <br/>
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Link to="/inicio" style={{textDecoration: "none"}}> 
                    <Button variant="contained" startIcon={<ArrowBackIosIcon/>}>
                      Volver al inicio
                    </Button>
                </Link>
            </Box>
        </Box>

        <Box>
          <img src={img404} width="500px" alt="Error" />
        </Box>
    </Box>
  )
}
