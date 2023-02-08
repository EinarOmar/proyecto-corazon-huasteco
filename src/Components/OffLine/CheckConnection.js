import React from 'react'
import { Detector } from 'react-detect-offline'
import {Wrapper, Contenedor} from '../Profiles/elementsForm'
import imageNoConection from '../../images/noConection.jpg'


const CheckConnection = props => {
  return (
    <div>
        <Detector
            render={({online})=> (
                online ? props.children:
                <div className='page'>
                    <Wrapper style={{display: "flex", minHeight: "600px", alignItems: "center"}}>
                        <Contenedor style={{textAlign: "center", background: "transparent", display: "flex", justifyContent: "center", flexFlow: "column wrap", border: "0px solid transparent"}}>
                            <h1>
                                ¡Whoops!
                            </h1>
                            <p>Parece que no tienes internet.</p>
                            <p>Revisa la conexión he intentalo mas tarde</p>
                        </Contenedor>

                        <div>
                        <img src={imageNoConection} width="500px" alt="Error" />
                        </div>
                    </Wrapper>
                </div>

            )}
        />
    </div>
  )
}


export default CheckConnection;