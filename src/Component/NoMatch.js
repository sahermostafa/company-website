import React,{useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "./NoMatch.css";
const NoMatch = () => {
  const navigate = useNavigate();
  useEffect( () => {
    setTimeout( () =>{
      navigate("/");
    },1000);
  },[])

    return (
      <div className="main">
        <div className="center">
          <p>
           Loading...
          </p>
        </div>
      </div>
      
    );
  };
  
  export default NoMatch;