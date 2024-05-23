import React from 'react'
import "../styles/Header.css";
import {titulo_header} from '../constants/constants'
import na from "../assets/na.png"

const Header = (props) => 
{
  //console.log(props)
  return (
    <> 
                 <div className='contenedor'>
                  <h1 id='header'> {titulo_header}</h1> 
                   <nav>
                      <a id="quiensoy" className="direccion" href="#quiensoy">Quien Soy</a>
                      <a id="main"  className="direccion" href="#main">Proyectos</a>
                      <a id="footer" className="direccion" href="#footer">Contactame</a> 
                   </nav>
                   <div>
                      <img className='img-logo' src={na} alt="logo personal"/>
                   </div>  
                </div>              
    </>
  )
}
export default Header