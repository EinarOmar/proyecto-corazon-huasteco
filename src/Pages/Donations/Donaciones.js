import React from 'react'
//TODO LO DE ANALYTICS DE FIREBASE
// import { analytics } from '../App/firebase';
// import { perf } from '../App/firebase'
// import { logEvent } from 'firebase/analytics';
// import { trace } from 'firebase/performance'
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';


export const Donaciones = () => {

  // useEffect(() => {
  //   logEvent(analytics, 'visitas pagina donaciones');
    
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
          <Typography color="text.primary"> DONACIONES</Typography>
        </Breadcrumbs>
      </Box>
      <Box sx={{margin:"15px"}}>
        <Box sx={{display: "flex", flexFlow: "column wrap", alignItems: "center"}}>
          <Typography variant="body1" color="initial">
            Donaciones
          </Typography>
        </Box>
      </Box>
    </div>
  )
}
