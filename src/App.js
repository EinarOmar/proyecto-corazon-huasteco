import React from "react";
import { Router } from "./Router/Router";
import {ThemeProvider} from '@mui/material';
import {createTheme} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together
      light: '#D9CAAD', //color claro (beige)
      main: '#59143A', //color principal (vino)
      dark: '#591D55', //color oscuro (morado)
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});




function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
       <Router/>
      </ThemeProvider>
    </div>
  );
}

export default App;
