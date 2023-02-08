import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { CifradoCesar }         from '../Components/Cifrado/CifradoCesar'

import { Footer }               from '../Components/Layout/Footer/Footer'
import { NavBar }               from '../Components/Layout/NavBar/NavBar'

import { Administrador }        from '../Components/Profiles/Administrador'
import { Colaborador }          from '../Components/Profiles/Colaborador'
import { Consultor }            from '../Components/Profiles/Consultor'


import { Supervisor }           from '../Components/Profiles/Supervisor'

import { SobreNosotros }        from '../Pages/About_us/SobreNosotros'
import { AvisoDePrivacidad }    from '../Pages/AvisoPrivacidad/AvisoDePrivacidad'
import { Acceso }               from '../Pages/Acceso/Acceso'
import { CreadoresDeContenido } from '../Pages/Content_creators/CreadoresDeContenido'
import { Donaciones }           from '../Pages/Donations/Donaciones'
import { Error }                from '../Pages/Error/Error'
import { Inicio }               from '../Pages/Home/Inicio'
import { Mapa }                 from '../Pages/Home/Mapa'
import { Tienda }               from '../Pages/Shop/Tienda'
import { Danza }                from '../Pages/Tematicas/Danza'
import { Gastronomia }          from '../Pages/Tematicas/Gastronomia'
import { Musica }               from '../Pages/Tematicas/Musica'
import { PanelTematicas } from '../Pages/Tematicas/PanelTematicas'
import { Registro }             from '../Pages/Registro/Registro'
import { Tradiciones }          from '../Pages/Tematicas/Tradiciones'
import { Vestimenta }           from '../Pages/Tematicas/Vestimenta'
import { Solicitud }            from '../Pages/Registro/Solicitud'

//import CheckConnection from '../Components/OffLine/CheckConnection';
import { PreguntasFrecuentes } from '../Pages/PreguntasFrecuentes/PreguntasFrecuentes'


export const Router = () => {
  return (
      <BrowserRouter>
          {/*Header y navegación*/}
          <NavBar/>

          {/*Contenido central*/}
          <div className='page' style={{minHeight: "630px"}}>
            <div>
              <Routes>
                  <Route path='/'         element={<Navigate to='/inicio'/>}/>
                  <Route path='/inicio'   element={<Inicio/>} />
                  <Route path='/mapa'     element={<Mapa/> } />

                  {/* T E M A T I C A S */}
                  <Route path="/tematicas/*" element={<PanelTematicas/>}>
                      <Route index element="Listado de tematicas" />
                      <Route path="vestimenta"   element={<Vestimenta />} />
                      <Route path="danza"        element={<Danza/>} />
                      <Route path="gastronomia"  element={<Gastronomia/>} />
                      <Route path="musica"       element={<Musica/>} />
                      <Route path="tradiciones"  element={<Tradiciones/>} />
                      <Route path="*"            element={<Error/>} />
                  </Route>

                  {/* P R O P I O    D E    L A    P Á G I N A */}
                  <Route path='/sobre-nosotros'         element={<SobreNosotros/>} />
                  <Route path='/preguntas-frecuentes'   element={<PreguntasFrecuentes/>} />
                  <Route path='/donaciones'             element={<Donaciones/>} />
                  <Route path='/creadores-de-contenido' element={<CreadoresDeContenido/>} />
                  <Route path='/tienda'                 element={<Tienda/>} />
                  <Route path='/aviso-de-privacidad'    element={<AvisoDePrivacidad/>} />

                  {/* P E R F I L E S */}
                  <Route path='/user/consultor'     element={<Consultor/>} />
                  <Route path='/user/colaborador'   element={<Colaborador/>} />
                  <Route path='/user/supervisor'    element={<Supervisor/>} />
                  <Route path='/user/administrador' element={<Administrador/>} />

                  {/* A C C E S O   Y   R E G I S T R O */}
                  <Route path='/acceso'               element={<Acceso/>} />
                  <Route path='/acceso/cesar'         element={<CifradoCesar/>} />
                  <Route path='/registro'             element={<Registro/>} />
                  <Route path='/registro/colaborador' element={<Solicitud/>} />

                  <Route path="*" element={<Error/>} />
              </Routes>   
            </div>        
          </div>

          <Footer/>
      </BrowserRouter>
  )
}
