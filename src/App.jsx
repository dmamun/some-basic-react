
import { useState } from 'react'
import './App.css'
import Form from './Form';
import Toggle from './Toggle';
import DisplayMessage from './DisplayMessage';
import ToggleWork from './ToggleWork';
import ToggleBtn from './ToggleBtn';
import FormHandling from './FormHandling';
import ConditionForm from './ConditionForm';
import AddForm from './AddForm';
import FormHandlingAdd from './formHandlingAdd';


function App() {
  const [color,setColor]=useState("red");
  const handleColor=()=>{
    setColor("blue");
  }
  
  

  return (
    <>
    <h1>useState hooks in react</h1>
    {/* <p onClick={handleColor}>This is {color} color</p> */}
    {/* <Form></Form> */}
    {/* <Toggle></Toggle> */}
    {/* <DisplayMessage></DisplayMessage> */}
    {/* <ToggleWork></ToggleWork> */}
    {/* <ToggleBtn></ToggleBtn> */}
    
    {/* <FormHandling></FormHandling> */}
    {/* <ConditionForm></ConditionForm> */}
    {/* <AddForm></AddForm> */}
    <FormHandlingAdd></FormHandlingAdd>

   
  
    </>
  )
}

export default App
