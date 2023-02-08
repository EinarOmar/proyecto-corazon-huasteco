import React from 'react'
//TODO LO DE ANALYTICS DE FIREBASE
// import { analytics } from '../App/firebase';
// import { perf } from '../App/firebase'
// import { logEvent } from 'firebase/analytics';
// import { trace } from 'firebase/performance'
import { Link } from 'react-router-dom';
import { Box, Typography, Breadcrumbs} from '@mui/material'

export const Musica = () => {

  // useEffect(() => {
  //   logEvent(analytics, 'visitas pagina musica');
    
  //   const t = trace(perf, "test_trace");
  //   t.putAttribute("experiment", "A");
  // }, []); 

  return (
    <div>
      <Box sx={{p:2}}>
        <Breadcrumbs aria-label="breadcrumb" separator=">">
          <Link to="/inicio" style={{color: "inherit"}}>
            INICIO
          </Link>
          <Link to="/tematicas" style={{color: "inherit"}}>
            TEMATICAS
          </Link>
          <Typography color="text.primary"> MÚSICA</Typography>
        </Breadcrumbs>
      </Box>
      <Box sx={{margin: "15px"}}>
        <Box sx={{display: "flex", flexFlow: "column wrap", alignItems: "center"}}>
          Contenido de música
        </Box>
      </Box>
    </div>
  )
}

