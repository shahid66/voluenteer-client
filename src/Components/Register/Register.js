import { DatePicker } from '@material-ui/pickers';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import './Register.css'
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'
import { useHistory, useParams } from 'react-router-dom';
import FakeData from '../../Components/FakeData/FakeData'
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import { parseJSON } from 'date-fns';




const Register = () => {
  const[loggedInUser,setLoggedInUser]=useContext(UserContext);
 
  const[eventData,setEventData]=useState([]);
  const{key}=useParams();


useEffect(()=>{
    fetch('https://stark-lake-99253.herokuapp.com/Events').then(res=>res.json()).then(data=>setEventData(data))

},[])
const filterData=eventData.find(data=>data.key===key);



// useEffect(()=>{
  
// },[])
    const [selectedDate,setSelectedDate]=useState(new Date());
    const date=selectedDate.toLocaleDateString('en-GB')
    console.log(date);
console.log(selectedDate.date)
    const history = useHistory([]);

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data =>{
      // console.log(data);
      const newInfo={...data, date}
      console.log(newInfo)

      fetch('https://stark-lake-99253.herokuapp.com/registerEvent',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(newInfo)
    }).then(res=>res.json())
    .then(data=>{
        if(data){
            console.log('data s')
        }
    });
      

        history.push('/event');



    }
  
    return (
        <div className='registerContent'>
            <div style={{width:'80%',margin:'0px auto'}}>
                <h2>Register as a Volunteer</h2><br/>
                
                <Form onSubmit={handleSubmit(onSubmit)}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Full Name</Form.Label>
    <input className='form-control' name="name" value={loggedInUser.name} ref={register({ required: true })} />
      {errors.name && <span>This field is required</span>}
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Email</Form.Label>
    <input className='form-control' name="email" value={loggedInUser.email} ref={register({ required: true })} />
      {errors.email && <span>This field is required</span>}
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Date</Form.Label>
    <ReactDatePicker className='dateLine'
        selected={selectedDate}
        onChange={date=>setSelectedDate(date)}
        dateFormat='dd-MM-yyyy'
        
        
    />
    
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Description</Form.Label>
    <input className='form-control' name="details" ref={register({ required: true })} />
      {errors.details && <span>This field is required</span>}
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Event Name</Form.Label>
    <input className='form-control' name="event" value={filterData && filterData.name} ref={register({ required: true })} />
      {errors.event && <span>This field is required</span>}
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            
            </div>
        </div>
    );
};

export default Register;