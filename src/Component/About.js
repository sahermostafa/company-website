import React from "react";
import {Card} from 'react-bootstrap';
import MultiplePizzas from "../assets/pexels-pixabay-459728.jpg";
import "./About.css";
import{Container} from 'react-bootstrap';
function About() {
  return (
    <Container fluid>
      <div className="about">
       <div className="aboutTop" style={{background:`url(${MultiplePizzas})`,backgroundSize:`cover`,backgroundPosition:`center`,width:`100%`,height: `600px`}}>
       </div>
      <div className="aboutBottom">
         <Card style={{width:`100%`}}>
                <Card.Body>
                    <Card.Title className='heade'>
                    Intro - Façade engineering:
                    </Card.Title>
                        <p>PBC – Integrated construction Applicators – has been recently established specialized as ma specialized in the aluminum industry and façade engineering and interior decorative works in 2006..</p> 
                        <p>Please note that the establishment has been very successful in the execution of aluminum and decoration projects in Jeddah and whole kingdom of Saudi Arabia, and has recently</p>
                        <p> executed during 2008 – 2009, some prestigious projects in Jeddah, while operating under the name of our sister Establishment Al Anamel Al Baidaa.</p>
                        <p>From its inception, PBC was able to secure and maintain a good position on the local market in the fields of Aluminum Glazed Curtain Wall Facades, Self Cleaning Curtain Wall Facades,</p>
                        <p> Spider System Facades, Spider systems and architectural and interior decorative works like gypsum board , interior cladding ,Armstrong ,aluminum partitions …etc. , and was able to</p>
                        <p>expand its activities to cover numerous complementary exterior and interior finishing products.</p> 
                        <p>Our awareness of new technological developments and challenging market needs drives PBC to continuously invest in new building and machinery in order to bring about a wider range </p>
                        <p>of products, as well as greater efficiency and speed at the production line, meeting with the real-time demand. Furthermore, our marketing plan is set up to service a complete range of </p>
                        <p>finishing product requirements. This concept is further enhanced by close cooperation with leading internationally renowned system suppliers, our in-house design and engineering </p>
                        <p>office and skilled manpower.</p> 
                        <p>The establishment’s primary market is the building construction sector with a focus on turns key solutions covering design, Fabrication, and erection of aluminum and glazing systems,</p> 
                        <p>interior decorative materials for hospitals, office buildings, hotels, universities, airports,commercial centers and private residences. Since its inception, PBC has executed well over</p>
                        <p>80 projects by offering quality products with clear focus on customer service (some of the projects were executed under the name of Al Anamel Al Baidaa). Some of them are,</p> 
                        <p>- New Oncology Ward Hospital- Jeddah: More than 3,000 Sqm. of Glazed Facades, with custom made Aluminum Cladding, 6000 Sqm Gypsum Board,10000Sqm Paint.</p>
                        <p>- King-Abulaziz University, Jeddah.</p> 
                        <p>- ITCC Hotel (Crown Plaza) Riyadh 4000 SQM Flat Skylight.</p> 
                        <p>- ITCC complex 5000 SQM fire rating curtain wall. </p>
                        <p>- MINISTRY OF HIGHER EDUCATION QASSIM UNIVERSITY </p>
                        <p>- New Rehabilitation and Diabetic Building, Jeddah.</p>
                        <p>- NEW REHABILITATION AND DIABETIC BUILDING, Al Qassim.</p>
                        <p>- INTERMEDIATE SCHOOL, Riyadh </p>
                        <p>- Blood Bank, Jeddah. - I.S.I.D, Jeddah. </p>
                        <p>- King-Abdul-Aziz Medical City PATHOLOGY &copy;MEDICAL LABORATORY BUILDING, Jeddah.</p>
                        <p>- King Faisal Hospital, Riyadh.</p> 
                        <p>- Palladium Center, Riyadh.</p>
                        <p>- King Salman Science Oasis (K.S.S.O), Riyadh.</p>
                        <p>- National Guard Family Compound, Jeddah.</p> 
                        <p>- Villa. Dr. Abdul Rahman Al-Mashari, Riyadh</p> 
                        <p>- NATIONAL GRID (SRCC), ABHA. </p>
                        <p>- King Abdullah Financial District (Museum), Riyadh. </p>
                        <p>- Riyadh Metro Line-02 Canopies </p>
                        <p>- Riyadh Metro Line-01 Canopies </p>
                        Situated in PBC - KSA is founding its new factory over a 2,000 Sqm manufacturing facility, in addition to an architectural steel factory and stone are 1500 Sqm.

                       <h4>Vision</h4>  
                        PBC strives to be one of the Leading Aluminum Companies in the Middle East.

                        <h4>Mission</h4>
                        <p>PBC will strive to become one of the leading design and execution companies in the façade industry in the Saudi Arabia by focusing on the following primary objectives.</p> 
                        <p>• Strict adherence to product quality and continuous improvement.</p>
                        <p>• Customer orientated behavior to ensure full customer satisfaction.</p>
                        <p>• Continuous innovation and keeping up to date with the latest technological advances in the field.</p>
                        <p>With the above objectives in view, PBC targets to deliver to its customers the desired product, according to highest levels of quality, within the targeted delivery schedules.</p> 
                        To that effect, we strongly rely on our exceptional human resources, team spirit, state of the art equipment and machinery, and a total quality management system complying with ISO 9001:2000 to set the quality standards and operating procedures leading to our goals.
                        We believe that the quality of our products and services is of utmost importance to the future existence and growth of our company. Consequently, by means of this quality policy, we re-confirm the commitment of management to supply the necessary resources in accordance with the requirements of ISO 9001:2000, and express our faith that our employees will contribute to and improve our quality level

      
                   
                </Card.Body>
            </Card>
      </div>
    </div>
    </Container>
    
  );
}

export default About;