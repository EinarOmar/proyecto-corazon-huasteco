import React from 'react'

// ELEMENTOS PERSONALIZADOS
import { Contenedor, Wrapper } from '../../Components/Profiles/elementsForm'
// ELEMENTOS DE MATERIAL UI
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

import LoginIcon from '@mui/icons-material/Login';
import Breadcrumbs from '@mui/material/Breadcrumbs';
// REACT ROUTER
import { Link } from 'react-router-dom';
//TODO LO DE ANALYTICS DE FIREBASE
// import { analytics } from '../../App/firebase';
// import { perf } from '../../App/firebase'
// import { logEvent } from 'firebase/analytics';
// import { trace } from 'firebase/performance'
import {Container, Form} from "semantic-ui-react"
//formik
import {useFormik} from 'formik'
import * as Yup from "yup"
import { FormatLineSpacing } from '@mui/icons-material';

const perfiles = [
  { label: 'Administrador' },
  { label: 'Colaborador' },
  { label: 'Consultor' },
  { label: 'Supervisor' },
]

export const Acceso = () => {

  const formik = useFormik({
    initialValues:{
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("El email es obligatorio"),
      password: Yup.string()
                .required("La contraseña es obligatoria")
                .min(8, "La contraseña debe tener mas de 8 caracteres")
    }),

    onSubmit: (formData)=>{
      formik.handleReset()
      console.log(formData)
      alert("Datos guardados");
    }
  })

  // useEffect(() => {
  //   logEvent(analytics, 'visitas pagina acceso');
    
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
          <Typography color="text.primary"> ACCESO</Typography>
        </Breadcrumbs>
      </Box>

      <Box sx={{margin:"15px"}}>
        <Box sx={{display: "flex", flexFlow: "column wrap", alignItems: "center"}}>
          <Typography variant="h4" color="primary.dark" sx={{textAlign: "center", margin: "15px 0"}}>
            Acceder
            <LoginIcon fontSize='large' />
          </Typography>

          {/* C O N T E N E D O R */}
          <Wrapper>
            <Contenedor>
              {/* F O R M U L A R I O */}
              {/* <Box
                component="form"
                sx={{
                  display: "flex",
                  flexFlow: "column wrap",
                  minWidth: "500px",

                  '& > :not(style)': { m: 1, minWidth: '500px' }
                }}
                
                noValidate
                autoComplete="off"
                onSubmit={()=>console.log("formulario enviado")}
              >

                <Typography variant="h6" color="primary">Ingresa tus datos</Typography>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={perfiles}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Tipo de usuario" name='perfil' />}
                />
                <TextField type="email"    id="filled-basic" label="Correo o Usuario" variant="outlined" name='email' />
                <TextField type="password" id="filled-basic" label="Contraseña"       variant="outlined" name='password'/>

                <FormControlLabel control={<Checkbox defaultChecked />} label="Recuérdame" />

                <Button variant="contained"  endIcon={<LoginIcon />}>
                  Ingresar
                </Button>

                <Typography variant="caption" color="initial">¿Sin cuenta? Registrate <Link to="/registro">Aquí</Link></Typography>

              </Box> */}

              

              <div>
                
                  
                  <Form style={{width: "100%" }} onSubmit={formik.handleSubmit}> 
                    <Box
                      component="form"
                      sx={{
                        display: "flex",
                        flexFlow: "column wrap",
                        minWidth: "500px",
      
                        '& > :not(style)': { m: 1, minWidth: '500px' }
                      }}
                    >
                    <Typography variant="h6" color="primary">Ingresa tus datos</Typography>

                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={perfiles}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Tipo de usuario" name='perfil' />}
                    />
                    
                    <TextField 
                      label="Correo o Usuario" 
                      type="text"    
                      name='email' 
                      variant="outlined" 
                      onChange={formik.handleChange} 
                      error={formik.errors.email}
                      helperText={formik.errors.email}
                      value={formik.values.email}
                      autoComplete="off"
                    />

                    <TextField 
                      label="Contraseña"       
                      type="password" 
                      name='password'
                      variant="outlined" 
                      onChange={formik.handleChange} 
                      helperText={formik.errors.password}
                      error={formik.errors.password}
                      value={formik.values.password}
                    />

                    <FormControlLabel control={<Checkbox defaultChecked />} label="Recuérdame" />

                    <Button variant="contained"  endIcon={<LoginIcon />}>
                      Ingresar
                    </Button>
                    <Button variant="contained" onClick={formik.handleReset}>
                      Limpiar formulario
                    </Button>

                    <Typography variant="caption" color="initial">¿Sin cuenta? Registrate <Link to="/registro">Aquí</Link></Typography>

                    <Button type='submit'>Registro</Button>
                    
                </Box>
                  </Form>
              </div>
                <Link to="cesar">Cifrado cesar</Link>
              
            </Contenedor>
          </Wrapper>

        </Box>
      </Box>

    </div>
  )
}
