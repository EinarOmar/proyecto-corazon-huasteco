import React from 'react'
import Box from '@mui/material/Box';
import {WraperCarousel} from './Inicio.elements'
import { ElementCarousel } from './ElementCarrousel';
import { Link } from 'react-router-dom';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import MapIcon from '@mui/icons-material/Map';

//TODO LO DE ANALYTICS DE FIREBASE
// import { analytics } from '../../App/firebase';
// import { perf } from '../../App/firebase'
// import { logEvent } from 'firebase/analytics';
// import { trace } from 'firebase/performance'

export const Inicio = () => {

  // useEffect(() => {
  //   logEvent(analytics, 'visitas pagina inicio');
    
  //   const t = trace(perf, "test_trace");
  //   t.putAttribute("experiment", "A");
  // }, []);

  return (
    <div>
      <Box sx={{ textAlign: "center", padding: "15px 0"}}>
        <Box sx={{background: "#591D55", padding: "0px", borderRadius: "50px", display: "inline-flex"}}>
            <Box sx={{background: "#A6874E", padding: "7px 14px", borderRadius: "50px",}}>Carrusel <ViewCarouselIcon/></Box>
            <Box sx={{color: "#A6874E", padding: "7px 14px", borderRadius: "50px"}}>
              <Link style={{textDecoration: "none", color: "#A6874E"}} to="/mapa">Mapa <MapIcon/></Link>
            </Box>
        </Box>
      </Box>

      <WraperCarousel>
        <ElementCarousel/>
      </WraperCarousel>
      
      <Box>
        {/* <Typography variant="body1" color="initial">Aquí va a ir mas contenido</Typography>
        <Typography variant="body1" color="initial">Aquí va a ir mas contenido</Typography>
        <Typography variant="body1" color="initial">Aquí va a ir mas contenido</Typography> */}
      </Box>
      
    </div>
  )
}
