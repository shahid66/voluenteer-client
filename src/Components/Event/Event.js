import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import EventComponent from '../EventComponent/EventComponent';
import './Event.css'


const Event = () => {
    const[loggedInUser,setLoggedInUser]=useContext(UserContext);
    const[eventInfo,setEventInfo]=useState([])
    console.log(eventInfo)

    useEffect(()=>{
        fetch('https://stark-lake-99253.herokuapp.com/register?email='+loggedInUser.email).then(res=>res.json()).then(data=>setEventInfo(data))
    },[eventInfo])
    return (
        <div className='eventContentMain'>
            {
                eventInfo.map(dt=><EventComponent data={dt}></EventComponent>)
            }
            
            
        </div>
    );
};

export default Event;