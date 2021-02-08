import React,{useEffect,useState} from 'react'

function Contact(props) {

    // const [name,setName] = useState("Darshan from const");
    // const [age,setAge] = useState(28);
    useEffect(()=>{
        // console.warn("Hello from hooks.");
        console.warn("check props",props.name);
    },[])
    useEffect(()=>{
        console.warn("check props 2 for update ",props.name);
    },[props.name])

    let data='Hello Rose contact'
    return(
        <div>
            <h1>Contact us page from function</h1>
            <h2>{data}</h2>
            <h2>Name : {props.name}</h2>
            {/* <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <button onClick={()=>setAge(65)}> Update Age</button>
            <button onClick={()=>setName("Darshan Chauhan Btn")}>Update name</button> */}
        </div>
    )
}

export default Contact;