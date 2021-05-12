import React, { useState } from 'react'
import './App.css'
import ReactDom from 'react-dom'
import { AiFillCloseCircle, AiFillLeftCircle } from "react-icons/ai";
import { getAllByAltText } from '@testing-library/dom';
import ToDoList from './ToDoList'


function App() {
  const[todo,setTodo] = useState('')
  const[items,setItems] = useState([])
  const onDelete = (id)=>{
    console.log(id)
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id
      })

    })
  

  
}

  const OnChangeHandler=(event)=>{
      setTodo([event.target.value])
  }
  const SetOnClickListener = ()=>{
    setItems((oldItems)=>{
      return [...oldItems,todo]
      
    }
      
    )
    setTodo("")
  }
 
  return (
    <div className = "main_div" >
      <div className = "center_div">
        <br />
        <h1>ToDO List</h1>
        <br />
        <input type = "text" 
        placeholder = 'Add Item'
        name="todo"
         value={todo}
         onChange = {OnChangeHandler}/>
        <button type="submit" onClick={SetOnClickListener}>+</button>

        <ol>
          {items.map((itemval,index)=>{
            return(<ToDoList 
              text = {itemval}
              key = {index}
              id = {index}
              onSelect = {onDelete}
            />)
            
          })}
        </ol>
       
      </div>
      
    </div>
  )
}

export default App
