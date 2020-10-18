import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Login.css'
import Google from '../../logos/Group 573.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import * as firebase from "firebase/app";


import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useHistory, useLocation } from 'react-router-dom';


firebase.initializeApp(firebaseConfig);
const Login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();


    const[user,setUser]=useState({
        name:'',
        email:'',
        photo:'',
        password:'',
        error:'',
        success:false
      });
      const[loggedInUser,setLoggedInUser]=useContext(UserContext);
      
      let history = useHistory();
      let location = useLocation();
      
      let { from } = location.state || { from: { pathname: "/" } };
      const handelLoginGoogle =()=>{
        firebase.auth().signInWithPopup(provider).then(res=>{
           
            const{displayName,email, photoURL}=res.user;
            const user ={
              isSignedIn: true,
              name: displayName,
              email:email,
              photo:photoURL
            }
            const newUserInfo ={...user};
            newUserInfo.error = '';
            newUserInfo.success=true;
            setLoggedInUser(newUserInfo);
            setUser(newUserInfo);
            history.replace(from);
            
            
          }).catch(function(error) {
            
            var errorCode = error.code;
            var errorMessage = error.message;
            
            var email = error.email;
            
            var credential = error.credential;
            
          });
          
    }

    return (
        <div className='mainContent'>
            <div>
                <h2>Login With</h2><br/>
            <Button onClick={handelLoginGoogle} ><FontAwesomeIcon className='googleBtn' icon={faGoogle} />Login</Button>
            <p style={{paddingTop:'10px'}}>Don't have an account? <span style={{color:'red', cursor: 'pointer'}} type='link'>Create account</span></p>
            </div>
        </div>
    );
};

export default Login;