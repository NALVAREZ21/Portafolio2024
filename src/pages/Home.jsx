import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from "../components/Footer";
import {Estudiante} from '../constants/constants';
import {parrafo_footer} from '../constants/constants';
import {titulo_main} from "../constants/constants";
import {contacto_footer} from '../constants/constants';
import {titulo_header} from "../constants/constants";
const Home = (props) => {
  //console.log(props);
  return (
    <>
       <Header titulo_header={titulo_header}/>
       <Main Estudiante={Estudiante} titulo_main={titulo_main} />
       <Footer parrafo_footer={parrafo_footer}  contacto_footer={contacto_footer}/>
    </>
  )
}

export default Home