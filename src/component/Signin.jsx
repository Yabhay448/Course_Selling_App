import {useState} from 'react';
import { TextField, Checkbox, FormControlLabel,Card,Button} from '@mui/material';

function Signin(){
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');
    const handleSignin = () => {
        fetch('http://localhost:3000/admin/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                email,
                password,
            },
            body:JSON.stringify({email,password}),
        })
        .then(response=>response.json())
        .then(data=>{console.log(data)
            if(data.token){
                localStorage.setItem('token',data.token);
                window.location="/";
            }
        });
    }
    return(
        <div style={{margin:'10px',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h2>
                    Welcome back: Lets get you signed In
            </h2>
            <Card style={{display:"flex",
                        flexDirection:"column",
                        margin:'5px',
                        width:'50vw',
                        padding:'5px',
                       justifyContent:'center',
                    }}              
            variant="outlined">
                <div style={{display:'flex',justifyContent:'space-between',
                padding:"5px"}}>
                <Button style={{margin:"2px"}} variant="contained">Login with facebook</Button>
                <Button style={{margin:"2px"}} 
                variant="contained">Login with google</Button>
                </div>
                <TextField id="outlined-basic" label="Email" variant="outlined" style={{margin:'5px' ,height:'55px'}}
                value={email}
                onChange={e=>setEmail(e.target.value)} />
                <TextField id="outlined-basic" label="Password" variant="outlined" style={{margin:'5px' ,height:'55px'}}
                value={password}
                onChange={e=>setPassword(e.target.value)}/>
                <FormControlLabel required control={<Checkbox />} label="Remember me" />
                <div>
                <Button style={{margin:"2px"}} onClick={handleSignin} 
                variant="contained">Login</Button>
                </div>
                {/* <Link href="#">Forget password</Link> */}
            </Card>
        </div>
    )
}

export default Signin;