import React,{useState} from 'react';

function Event(props) {
    let data = 'Hello this is Event function';

    const [val,setVal] = useState("Darsha")
    const test =(e)=> {
        console.log("This is test function",e.target.value);
        setVal(e.target.value)
    }
    return(
        <div>
            <h1>{data}</h1>
            <input type="text" value={val} onChange={test} />
            <button onClick={()=>alert(val)}>Click Me</button>
        </div>
    )
}

export default Event
