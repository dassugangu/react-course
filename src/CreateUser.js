import React,{useState} from 'react'

import { Button } from 'react-bootstrap'


function CreateUser() {


    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [mobile,setMobile] = useState("")

    function createUser() {
        let data={name, email, mobile}
        console.log("Called create User",data);
    }
    return(
        <div>
            <h1>Create New User From Here</h1>
            <input key="1" type="text" onChange={(e)=>setName(e.target.value)} name="username" value={name} />
            <br /><br />
            <input key="2" type="text" onChange={(e)=>setEmail(e.target.value)} name="email" value={email} />
            <br /><br />
            <input key="3" type="text" onChange={(e)=>setMobile(e.target.value)} name="mobile" value={mobile} />
            <br /><br />
            <Button variant="primary" onClick={createUser}>Create New User</Button>{' '}

            
        </div>
    )
}

export default CreateUser