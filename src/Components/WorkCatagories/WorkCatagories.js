import React, { useEffect, useState } from 'react';
import './WorkCatagories.css'
import WorkImg from  '../../images/babySit.png'
import { Card, CardDeck } from 'react-bootstrap';
import WorkComponent from '../WorkComponent/WorkComponent';
import FakeData from '../../Components/FakeData/FakeData'

const WorkCatagories = (props) => {
    // const fakedata=FakeData;
    const[eventData,setEventData]=useState([]);
    
    useEffect(()=>{
        fetch('https://stark-lake-99253.herokuapp.com/Events').then(res=>res.json()).then(data=>setEventData(data))
    },[])
    return (
        <div className='workCatagoriesMain'>
            {
                eventData.map(data=><WorkComponent data={data}></WorkComponent>)
            }
        
          
        </div>
    );
};

export default WorkCatagories;