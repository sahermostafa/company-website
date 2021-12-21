import React from "react";
import { ServiceList } from "../helpers/ServiceList";
import ServiceItem from "./ServiceItem";
import "./Service.css";
import{Container} from 'react-bootstrap';

function Work() {
  return (
    <Container fluid>
      <div className="menu">
      <h1 className="menuTitle">Our Service</h1>
      <div className="menuList">
        {ServiceList.map((serviceItem, key) => {
          return (
            <ServiceItem
              key={key}
              image={serviceItem.image}
              name={serviceItem.name}
              price={serviceItem.price}
            />
          );
        })}
      </div>
    </div>
    </Container>
    
  );
}

export default Work;
