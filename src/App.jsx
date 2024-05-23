import Home from "./pages/Home";
import { Estudiante } from "./constants/constants";
import { parrafo_footer } from "./constants/constants";
import { titulo_main } from "./constants/constants";
import {contacto_footer} from "./constants/constants";
import { titulo_header } from "./constants/constants";

function App() {
  return (
    <>
       <Home tiluto_header={titulo_header} Estudiante={Estudiante} parrafo_footer={parrafo_footer} titulo_main={titulo_main}  contacto_footer={ contacto_footer}/>
    </>
  )
}

export default App
