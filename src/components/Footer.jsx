import React from 'react'
import "../styles/Footer.css";
import linkedin from "../assets/linkedin.webp";
import github from "../assets/github.png"
import facebook from "../assets/logocircular.png"
import { contacto_footer} from "../constants/constants";
import {parrafo_footer} from "../constants/constants";

const Footer = (props) => {
  // console.log(props.contacto_footer)
  return (
  <>
        <form className='formulario'>
              <h4 id="contactame-footer">{props.contacto_footer}</h4>
              <label for="apeynom">Nombre y Apellido</label>
              <input  type="text" value="" id="apeynom" required  placeholder='Nicolas Alvarez'/>
              <br/>
              <label for="mail">Email</label>
              <input type="text" value="" id='mail' placeholder='n@outlook.com' required/>
              <br/>
              <label for="numero">Telefono</label>
              <input type="number" value="" id='numero' placeholder='1213313' required/>
              <br/>
              <br/>
              <textarea placeholder="Dejame tu mensaje (opcional)" cols="40" rows="5"></textarea>
              <br/>
              <button className='botonenviar' type='submit'>Enviar</button>
              <br/>
              <aside>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8378420603053!2d-65.21798058803654!3d-26.845109476590338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c755a2068c7%3A0x6a27d2f47c2502bc!2sClub%20Tucum%C3%A1n%20Central!5e0!3m2!1ses!2sar!4v1715917239550!5m2!1ses!2sar"></iframe>
              </aside>
          <div>
                      <a href="https://www.linkedin.com/in/nicolas-alvarez-564538289/" target='_blanck'>
                        <img id="foto-linkedin" src={linkedin} alt="logo linkedin"/>
                      </a>
                      <a href="https://github.com/NALVAREZ21" target='_blanck'>
                        <img id="foto-github" src={github} alt="logo github"/>
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=100007493206891" target='_blanck'>
                        <img id="foto-facebook" src={facebook} alt="logo facebook"/>
                      </a>
          </div>
          <div>
                 <h4 id="parrafo-footer">{parrafo_footer}</h4>
          </div>
        </form>
        <div>
                <a id="volver-arriba" href="Header.jsx">Volver al inicio</a>
        </div>
  </>
  )
}
export default Footer;