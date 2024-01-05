import React, { useState } from 'react';

const FormHandlingAdd = () => {
    const [inputValue,setInputValue]=useState("");
    const [displayValue,setDisplayValue]=useState([]);
    const handleOnchange=(e)=>{
        setInputValue(e.target.value);

    }
    const handleForm=(e)=>{
        e.preventDefault();
        setInputValue("")
        setDisplayValue([...displayValue,inputValue]);
    }
    const handleDelete=(item)=>{
        const updatedDisplayValue=[...displayValue];
        updatedDisplayValue.splice(item,1)
        setDisplayValue(updatedDisplayValue)


    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input
                onChange={handleOnchange} 
                type='text'
                value={inputValue}
                placeholder='enter value'
                required>

                </input>
                <button>Add</button>
                {
                    displayValue.map(item=>
                        <div key={item}>
                            <span>{item}</span>
<button onClick={()=>handleDelete(item)}>delete</button>
                        </div>
                        )
                }
            </form>
            
        </div>
    );
};

export default FormHandlingAdd;