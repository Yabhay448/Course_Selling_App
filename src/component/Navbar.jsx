
// import * as React from 'react';
import Button from '@mui/material/Button';
import { useEffect,useState } from 'react';
import {useNavigate} from 'react-router-dom';
function Navbar(){
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  useEffect(()=>{
    fetch('http://localhost:3000/admin/me',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response=>response.json())
    .then(data=>{
      setEmail(data.username);
      console.log(data.email);
    });
  },[])
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    window.location="/"
  }
  const handleSignin = ()=>{
    navigate('/signin');
  }
  const handleSignup = ()=>{
    navigate('/signup');
  }
  return(
        <div style={{display:'flex',justifyContent:'space-between', margin:'7px' }}>
            <h1>logo</h1>
            {email ? (
              <div>
                <h3>{email}</h3>
                <Button style={{margin:"2px"}} variant="contained" onClick={handleLogout}>Logout</Button>
              </div>
            ):(
              <div>
              <Button style={{margin:"2px"}} variant="contained" onClick={handleSignin}>Sign In</Button>
              <Button style={{margin:"2px"}} 
              variant="contained" onClick={handleSignup}>Sign Up</Button>
              </div>
            )}
        </div>
  )
}

export default Navbar;