import {useState} from 'react';
import { TextField,Card,Button} from '@mui/material';

function AddCourses(){
    const [title,setTitle] = useState('');
    const [description,setDescription]=useState('');
    const [price,setPrice]=useState('');
    const handleAddCourses = () => {
        fetch('http://localhost:3000/admin/courses',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body:JSON.stringify({title,description,price}),
        })
        .then(response=>response.json())
        .then(data=>console.log(data));
    }
    return(
        <div style={{margin:'10px',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h2>
                    Lets add courses
            </h2>
            <Card style={{display:"flex",
                        flexDirection:"column",
                        margin:'5px',
                        width:'50vw',
                        padding:'5px',
                       justifyContent:'center',
                    }}              
            variant="outlined">
                <TextField id="outlined-basic" label="Title" variant="outlined" style={{margin:'5px' ,height:'55px'}}
                value={title}
                onChange={e=>setTitle(e.target.value)} />
                <TextField id="outlined-basic" label="Description" variant="outlined" style={{margin:'5px' ,height:'55px'}}
                value={description}
                onChange={e=>setDescription(e.target.value)}/>
                <TextField id="outlined-basic" label="Price" variant="outlined" style={{margin:'5px' ,height:'55px'}}
                value={price}
                onChange={e=>setPrice(e.target.value)}/>
                <div>
                <Button style={{margin:"2px"}} onClick={handleAddCourses} 
                variant="contained">Add Courses</Button>
                </div>
                {/* <Link href="#">Forget description</Link> */}
            </Card>
        </div>
    )
}

export default AddCourses;