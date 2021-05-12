import React, {useState} from 'react'
import './App.css'
import { AiFillCloseCircle, AiFillLeftCircle } from "react-icons/ai";


function ToDoList(props) {
    const [status, setStatus] = useState("Uncomplete")
    const onDone = ()=>{
        setStatus("Complete")
    }
   
    return(
        <>
        <div className= "todo_style">
            
             <li>{props.text}</li>
             
            <AiFillCloseCircle 
            size={30} 
            style={{ fill: 'black' }}
            onClick = {()=>{
                props.onSelect(props.id)
            }} />
            <button onClick={onDone}>{status}</button>
            </div>

        </>
    )
}

export default ToDoList
