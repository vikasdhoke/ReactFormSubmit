import React, { useState } from 'react';



const App =()=>{
// const state = useState();
const [name,setName]=useState();
const [fulName,setFulname]=useState();

const inputEvent =(event)=>{
    setName(event.target.value);
}

const word =()=>{
      setFulname(name);
}

return(
        <>
        <h1>Hello {fulName} </h1>
        <input type="Text" 
            placeholder="Enter Your Name"
            onChange={inputEvent}
            
        />
        <button onClick={word}>Click me </button>
        </>
    )

}

export default App;