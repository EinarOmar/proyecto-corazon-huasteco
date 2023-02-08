import React, {useState, useEffect} from 'react'

import { Box, Typography, Button, Breadcrumbs, Stack,  CardActionArea, CardActions, FormControl, InputLabel, Select, MenuItem} from '@mui/material'
import { Link } from 'react-router-dom';
import { app } from '../../Firebase/Firebase'

import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const Tienda = () => {

  // PARA LA BUSQUEDA NORMAL
  const [proyectos, setProyectos] = useState([]);
  const [tablaProyectos, setTablaProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value.toString().toUpperCase());
    console.log(e.target.value);
  }

  const filtrar = (terminoBusqueda)=>{
    var  resultadoBusqueda =  tablaProyectos.filter((elemento)=>{
      if(elemento.data().nombre.includes(terminoBusqueda)){
        return elemento;
      }
    });
    setProyectos(resultadoBusqueda);
    setDocs(resultadoBusqueda);
  }

  //PARA EL STORAGE DE FIREBASE
  const [archivoUrl, setArchivoUrl] = useState("");
  const [docs, setDocs] = useState([]);

  const archivoHandler = async(e) =>{
    const archivo = e.target.files[0];
    const storageRef = app.storage().ref();
    const archivoPath = storageRef.child(archivo.name);
    const something = await archivoPath.put(archivo);
    console.log("archivo cargado:", archivo.name);
    const enlaceUrl = await archivoPath.getDownloadURL();

    setArchivoUrl(enlaceUrl);
  }

  const submitHandler = async(e) =>{
    e.preventDefault();
    const nombreArchivo = e.target.nombre.value;
    const descripcion = e.target.descripcion.value;
    const autor = e.target.autor.value;

    if(!nombreArchivo){
      alert("Oops!", "la imágen debe tener un nombre", "error");
      return;
    }
    const coleccionRef = app.firestore().collection("productos");
    await coleccionRef.doc(`${new Date().getTime()}`).set({
        nombre: nombreArchivo,
        url: archivoUrl ,
        descripcion,
        autor
    })
    console.log(`archivo ${nombreArchivo} cargado con url: ${archivoUrl}`)
    alert("Imágen subida", "Tu imagen ha sido subida", "success");
    e.target.reset();
  }

  const obtenerInfo = async() => {
    const docList = await app.firestore().collection("productos").get();
    setDocs(docList.docs.map((doc)=> doc));
    setProyectos(docList.docs.map((doc)=> doc));
    setTablaProyectos(docList.docs.map((doc)=> doc));
  }

  useEffect(() => {
    obtenerInfo()
  }, [])

  return (
    <div>
      <Box sx={{p:2}}>
        <Breadcrumbs aria-label="breadcrumb" separator=">">
          <Link to="/inicio" style={{color: "inherit"}}>
            INICIO
          </Link>
          <Typography color="text.primary">TIENDA</Typography>
        </Breadcrumbs>
      </Box>


      {/* <div>
        <form onSubmit={submitHandler}>
          <input type="file" onChange={archivoHandler} /><br/>
          <input type="text" name='nombre' placeholder='Nombre'/><br/>
          <input type="text" name='descripcion' placeholder='Descripcion'/><br/>
          <input type="text" name='autor' placeholder='Autor'/><br/>
          <button>Enviar</button>
        </form>
      </div> */}

      <Box sx={{margin: "15px"}}>
        <Stack direction="row" spacing={2} sx={{width: 300}}>
          <Stack spacing={2} sx={{ width: 300 }}>
            <Search>
              <SearchIconWrapper>
                  <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                  placeholder="Buscar…"
                  inputProps={{ 'aria-label': 'search' }}
                  value={busqueda}
                  onChange={handleChange}
              />
            </Search>
          </Stack>
          <Stack spacing={2} sx={{width: 300}}>
            {/* DISEÑO DE BUSQUEDA AVANZADA */}
            <FormControl sx={{background: "primary.main"}}>
                <InputLabel id="demo-simple-select-label">Pais</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={country}
                  label="Age"
                  // onChange={obtenerPais}
                >
                  <MenuItem value={"RECIENTES"}>Recientes</MenuItem>
                  <MenuItem value={"MAS VISTOS"}>Mas vistos</MenuItem>
                </Select>
              </FormControl>
          </Stack>
        </Stack>
            
            



        <Box sx={{ padding: 5, display: "flex", flexFlow: "row wrap", justifyContent: "center"}}>
          {/* CARTAS */}
            {
                proyectos ? (proyectos.map(proyecto =>{
                    return(
                        <Box key={proyecto.data().url}>
                            <Card sx={{ maxWidth: 345, m: 2 }}>
                                <CardActionArea>
                                <CardMedia
                                    
                                    component="img"
                                    height="140"
                                    image={proyecto.data().url}
                                    alt={proyecto.data().nombre}
                                    />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {proyecto.data().nombre}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {proyecto.data().descripcion.slice(0, 100)}...
                                    </Typography>
                                </CardContent>
                                </CardActionArea>

                                <CardActions>
                                <Link to={`${proyecto.id}`}>
                                    <Button size="small" color="primary" variant='contained'>
                                    ver más
                                    </Button>
                                </Link>
                                
                                </CardActions>
                            </Card> {/* FIN CARTA */}
                        </Box>
                    )
                }))
                :
                <h1>Cargando datos</h1>
            }
        </Box>
    </Box>
      
    </div>
  )
}




// DISEÑOS DEL BUSCADOR
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
})); //FIN DE DISEÑO DE BUSCADOR