import React from 'react';
import{} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbara from "./Component/Navbara";
import Contact from "./Component/Contact";
import Index from "./Component/Index";
import About from "./Component/About";
import Service from "./Component/Service";
import Footer from "./Component/Footer";
import NoMatch from "./Component/NoMatch";
import{Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes , Route  } from "react-router-dom";

function App() {
  return (
    
    <Container fluid>
      <Navbara />
      < Routes>
        <Route exact path="/" element={ <Index/>} />
        <Route path="/service" element={ <Service/>} />
        <Route path="/about" element={ <About/>} />
        <Route path="/contact" element={ <Contact/>} />
        <Route path="*" element={ <NoMatch/> } />
      </Routes>
      <Footer />
    </Container>
  
        
  );
}




export default  App;
