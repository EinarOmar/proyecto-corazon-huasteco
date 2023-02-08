import vestimenta from '../../images/vestimenta.jpg'
import vestimenta2 from '../../images/vestimenta2.jpg'
import React from 'react'
import { Box, Typography, Breadcrumbs} from '@mui/material'

//TODO LO DE ANALYTICS DE FIREBASE
// import { analytics } from '../App/firebase';
// import { perf } from '../App/firebase'
// import { logEvent } from 'firebase/analytics';
// import { trace } from 'firebase/performance'


import { Link } from 'react-router-dom';



export const Vestimenta = () => {

  // useEffect(() => {
  //   logEvent(analytics, 'visitas pagina vestimenta');
    
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
          <Typography color="text.primary"> VESTIMENTA</Typography>
        </Breadcrumbs>
      </Box>
      <Box sx={{margin: "15px"}}>
        <Box sx={{display: "flex", flexFlow: "column wrap", alignItems: "center"}}>
          <Box sx={{m:5}}>
            <Typography variant="h4" color="primary.dark">Traje típico de Huejutla de Reyes Hidalgo</Typography>
          </Box>
          <Box sx={{display: "flex", flexFlow: "column wrap", marginBottom: 10}}>
            <img src={vestimenta} width="508px" alt="imagen" />
            <Typography variant="subtitle1" color="initial" sx={{width: 500}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sequi rerum beatae dolorum ipsum voluptatum autem voluptates reiciendis labore laudantium atque facilis, aut optio rem obcaecati ad alias nostrum sint?
            </Typography>
          </Box>
          <Box sx={{display: "flex", flexFlow: "column wrap"}}>
            <img src={vestimenta2} width="508px" alt="imagen" />
            <Typography variant="subtitle1" color="initial" sx={{width: 500}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sequi rerum beatae dolorum ipsum voluptatum autem voluptates reiciendis labore laudantium atque facilis, aut optio rem obcaecati ad alias nostrum sint?
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
    
  )
}

