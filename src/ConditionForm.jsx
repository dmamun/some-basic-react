import React, { useState } from 'react'

function ConditionForm() {
    const [text,setText]=useState("");
    const [error,setError]=useState(null);
    const handleForm=(e)=>{
        e.preventDefault();
        console.log(text);
    }
    const inputText=(e)=>{
        
        if(text.length<5){
           setError("password should be 6 character at least");
        }else{
            setText(e.target.value);
        }
    }
  return (
    <div>
        <form onSubmit={handleForm}>
            <input type="password" placeholder='enter password' required onChange={inputText} ></input>
            <p>{error}</p>
            <br></br>
            <button>Submit</button>
        </form>
      
    </div>
  )
}

export default ConditionForm;
