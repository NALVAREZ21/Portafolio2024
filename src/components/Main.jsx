import React from 'react'
import "../styles/Main.css"
import { Estudiante } from '../constants/constants'
import yo2 from "../assets/yo2.png";
import kiosco from "../assets/kiosco.png";
import github from "../assets/github.png";
import cmas from "../assets/cmas.png";
import js from "../assets/js.png";
import sql from "../assets/sql.png";
import admicion from "../assets/admicion.png";
import html from "../assets/html.webp";

const Main = (props) => {
  //console.log(props);
  return (
    <>
        <div className='card-img'> 
              <img src={yo2} alt="foto alvarez nicolas"/>
        </div>
        <div>         
                 <p className="parrafo">
                     Soy {Estudiante.apellido},{ Estudiante.nombre} y actualmente vivo en {Estudiante.Nacionalidad}, tengo {Estudiante.edad} años. 
                    Actualmente estoy cursando 2ª año de la <b>{Estudiante.Carrera}</b> y me apasiona interesa desarrollarme como programador backend, asi mismo contribuir al desarrollo de nuevas tecnologías.<br/> Ademas seguir mejorando mi nivel en mi <b>deporte favorito {Estudiante.DeporteFavorito}</b> y competir en torneos a nivel local.</p> 
        </div>
        <div>
              <h4 id='titulo-main'>{props.titulo_main}</h4>
              <div className='contenedor-card'>
                  <div> 
                    <h4 className='nombre-card'>Sitema Kiosco</h4>
                    <img className='img-lenguajes' src={kiosco}/> 
                  </div>  
                  <div className='enlace-git'>
                    <a href="https://github.com/NALVAREZ21/Administracion-Empleado.git" target='_blanck'>
                      <img id="foto-git" src={github} alt="logo git"/>
                    </a>
                  </div>
              <div/>
                  <div className='contenedor-card1'>
                    <h4 className='nombre-card1'>Sitema Administracion de Empleados</h4>
                    <img className='img-lenguajes1' src={admicion}/> 
                  </div>  
                  <div className='enlace-git1'>
                      <a href="https://github.com/NALVAREZ21/SistemaKiosco.git" target='_blanck'>
                      <img id="foto-git1" src={github} alt="logo git"/>
                    </a>
                  </div>
              </div>   
        </div>
        <div className='contenedor-tecnologias'>
              <img className="card-cmas" src={cmas} alt="imagen de cmas"/>
              <img className='card-html' src={html} alt="imagen de html"/>
              <img className='card-js' src={js} alt="imagen de js"/>
              <img className='card-sql' src={sql} alt="imagen de sql"/>
        </div>
    </>
  )
}
export default Main;