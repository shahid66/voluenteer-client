import React from 'react';
import WorkImg from  '../../images/babySit.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useParams, useHistory
} from "react-router-dom";
const WorkComponent = (props) => {

  const{name,btnColor,key,img}=props.data;
  
    return (
        <div className='workContent'>
        <img src={img} alt=""/>
    <span type='button' style={{background:`${btnColor}`}}><Link to={"/register/"+key}>{name}</Link></span>
      </div>
    );
};

export default WorkComponent;