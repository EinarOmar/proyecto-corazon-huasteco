import React from 'react'

import { Contenedor, Wrapper } from '../../Components/Profiles/elementsForm'

// ELEMENTOS DE MATERIAL UI
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Breadcrumbs from '@mui/material/Breadcrumbs';

// REACT ROUTER
import { Link } from 'react-router-dom';

//TODO LO DE ANALYTICS DE FIREBASE
// import { analytics } from '../../App/firebase';
// import { perf } from '../../App/firebase'
// import { logEvent } from 'firebase/analytics';
// import { trace } from 'firebase/performance'

const tipos = [
    { label: 'Estudiante' },
    { label: 'Docente' },
    { label: 'Persona Interesada' },
    
]

const sexos = [
    { label: 'Masculino' },
    { label: 'Femenino' },
    { label: 'Prefiero no decirlo' },
]


export const Registro = () => {

  // useEffect(() => {
  //   logEvent(analytics, 'visitas pagina registro');
    
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
          <Typography color="text.primary"> REGISTRO</Typography>
        </Breadcrumbs>
      </Box>

      <Box sx={{margin:"15px"}}>
        <Box sx={{display: "flex", flexFlow: "column wrap", alignItems: "center"}}>
          <Typography variant="h4" color="primary.dark" sx={{textAlign: "center", margin: "15px 0"}}>
            Registro <HowToRegIcon fontSize='large'/>
          </Typography>

          {/* C O N T E N E D O R */}
          <Wrapper>
            <Contenedor>
              {/* F O R M U L A R I O */}
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, minWidth: '200px' }
                }}
                
                noValidate
                autoComplete="off"
              >
                <Typography variant="h6" color="primary">Registra tus datos</Typography>
                
                <TextField type="text" id="filled-basic" label="Nombre(s)" variant="outlined" sx={{ width: 300 }} />
                <TextField type="text" id="filled-basic" label="Apellidos" variant="outlined" sx={{ width: 300 }} />
                <TextField type="number" id="filled-basic" label="Edad" variant="outlined" sx={{ width: 300 }} />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={sexos}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Sexo" />}
                />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={tipos}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Ocupación" />}
                />
                
                <TextField type="text" id="filled-basic" label="Código Postal:" variant="outlined" sx={{ width: 300 }} />
                <TextField type="email" id="filled-basic" label="Correo electronico:" variant="outlined" sx={{ width: 300 }} />
              
                <TextField type="password" id="filled-basic" label="Contraseña" variant="outlined" sx={{ width: 300 }} />
                <TextField type="password" id="filled-basic" label="Repite la Contraseña" variant="outlined" sx={{ width: 300 }} />
                
                
                <Checkbox sx={{maxWidth: "1px"}}/><Typography variant="caption" color="initial" sx={{textAlign: "center"}}>He leído y acepto el <Link to="/aviso-de-privacidad">Aviso de privacidad</Link></Typography>

                <Button variant="contained" sx={{width: "98%"}} endIcon={<LockIcon />}>
                  Registrarse
                </Button>

                <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)"}}>
                    <Typography variant="caption" color="initial" sx={{textAlign: "center"}}>Envia una <Link to="colaborador">solicitud</Link> de apoyo</Typography>
                    <Typography variant="caption" color="initial" sx={{textAlign: "center"}}>¿Tienes cuenta? <Link to="/acceso"> Inicia sesión</Link></Typography>
                    
                </div>
                

              </Box> 
            </Contenedor>
          </Wrapper>  

          
        </Box>
      </Box>

      

            
    </div>
  )
}
