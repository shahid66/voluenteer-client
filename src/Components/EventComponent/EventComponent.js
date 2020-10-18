import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import handImg from '../../images/extraVolunteer.png'

const EventComponent = (props) => {
const{event,date,_id}=props.data;

const handelDelete=(id)=>{
    fetch(`https://stark-lake-99253.herokuapp.com/deleteReEvent/${id}`,{
        method:'DELETE'
    }).then(res=>res.json())
    .then(data=>{
        console.log('delete successfull')
    })
}

    return (
        <div className='content'>
            <img src={handImg} alt=""/>
            
                <div>
                <p>{event}</p><br/>
                <p>{date}</p>
                </div>
                <button onClick={()=>handelDelete(_id)} className='cancel'>cancel</button>
            
        </div>
    );
};

export default EventComponent;