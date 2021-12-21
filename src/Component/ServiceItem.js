import React,{useState} from "react";
import{Button,Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ServiceItem({ image, name, price }) {
  const[shower,setShower]=useState(false);
  function Handels(){
    setShower(!shower);

  }
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h4> {name} </h4>
      
      <Button onClick={Handels} variant='dark'>Show More</Button>
      <Modal show={shower} >
        <Modal.Header><img src={image} style={{width: `100%`, height: `200px`}}/></Modal.Header>
        <Modal.Body>
        <h4>{name}</h4>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni placeat sapiente quidem et! Necessitati
          <p style={{fontWeight:`bold`}}> ${price} </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={Handels}  variant='dark'>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ServiceItem;
