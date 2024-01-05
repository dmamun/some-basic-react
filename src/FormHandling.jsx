import React, { useState } from 'react';

const FormHandling = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name,email);

    }
    const textField=(e)=>{
        setName(e.target.value);

    }
    const textEmail=(e)=>{
        setEmail(e.target.value);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='enter name' onChange={textField} required></input>
                <br></br>
                <input type='email' placeholder='enter email' onChange={textEmail} required></input>
                <br></br>
                <button>submit</button>
            </form>
            <p>{email}</p>
            
        </div>
    );
};

export default FormHandling;