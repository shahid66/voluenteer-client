import React from 'react';
import FakeData from '../../Components/FakeData/FakeData'

const AddEvents = () => {
    
    const handelAddEvents=()=>{
        // fetch('https://stark-lake-99253.herokuapp.com/addEvent',{
        //     method:'POST',
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(FakeData)
        // })
    }
    return (
        <div>
            <button onClick={handelAddEvents}>addEvents</button>
        </div>
    );
};

export default AddEvents;