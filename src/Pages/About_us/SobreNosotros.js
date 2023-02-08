import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs';


//TODO LO DE ANALYTICS DE FIREBASE
// import { analytics } from '../App/firebase';
// import { perf } from '../App/firebase'
// import { logEvent } from 'firebase/analytics';
// import { trace } from 'firebase/performance'

// colores personalizados
import { Link } from 'react-router-dom';


export const SobreNosotros = () => {

  // useEffect(() => {
  //   logEvent(analytics, 'visitas pagina sobrenosotros');
    
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
          <Typography color="text.primary">SOBRE NOSOTROS</Typography>
        </Breadcrumbs>
      </Box>
      <Box sx={{margin: "15px"}}>
          <Typography variant="h4" color="initial" sx={{textAlign: "center"}}>Sobre Nosotros</Typography>

          <Box sx={{ backgroundColor: "#591D55",display: "flex", }}>
              <Box>
                  <img src="https://www.newshidalgo.com.mx/wp-content/uploads/2022/10/casablanca-780x470.jpg" alt="nosotros" />
              </Box>
              <Box sx={{display: "flex", padding: "10px",flexDirection: "column", justifyContent: "center"}}>
                  <Typography variant="body1" color="white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sequi rerum beatae dolorum ipsum voluptatum autem voluptates reiciendis labore laudantium atque facilis, aut optio rem obcaecati ad alias nostrum sint?
                  </Typography>
                 <Typography>.</Typography> 
                  <Typography variant="body1" color="white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sequi rerum beatae dolorum ipsum voluptatum autem voluptates reiciendis labore laudantium atque facilis, aut optio rem obcaecati ad alias nostrum sint?
                  </Typography>
              </Box>
          </Box>
      </Box>
    </div>
    
  )
}
