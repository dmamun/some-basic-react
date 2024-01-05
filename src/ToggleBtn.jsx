import React, { useState } from 'react';

const ToggleBtn = () => {
    const [toggle,setToggle]=useState(false);
    const handleToggleBtn=()=>{
        setToggle(!toggle);
    }

    
    return (
        <div>
            <button onClick={handleToggleBtn}>Toggle Btn</button>
            {
                toggle ? (
                    <ul>
                <li>first item</li>
                <li>second item</li>
                <li>third item</li>
                <li>forth item</li>
            </ul>

                ):
                (
                    <p>there is error</p>
                )
            }
            
            
        </div>
    );
};

export default ToggleBtn;