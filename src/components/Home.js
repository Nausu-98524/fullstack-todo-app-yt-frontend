import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './home.css'
import ToDo from './ToDo';
import { addToDo, deleteTodo, getAllToDo, updateToDo } from '../utils/HandleApi';

const Home = () => {
    const location = useLocation();

    const[todo, setToDo]  = useState([])
    const[text, setText] = useState("")
    const[isUpdating, setIsUpdating] = useState(false)
    const[toDoId, setToDoId] = useState("")

    useEffect(()=>{
        getAllToDo(setToDo)
    },[])

    const updateMode = (_id, text) =>{
        setIsUpdating(true)
        setText(text)
        setToDoId(_id)
    }
  return (
    <div>
        <h1>Welcome {location.state.id} </h1>
        <hr />
        <div className="home">
            <div className="container">
                <h1>To Do App</h1>
                <div className="top">
                    <input type="text"
                        placeholder='Add ToDos...'
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                    />
                    <div className="add"
                     onClick={isUpdating ?()=>updateToDo(toDoId, text, setToDo, setText, setIsUpdating) : ()=>addToDo(text, setText, setToDo)}>{isUpdating ?  "Update" : "Add"}</div>
                </div>
                <div className="list">
                    {
                        todo.map((item) => <ToDo key={item._id} text={item.text}
                        updateMode={()=> updateMode(item._id, item.text)}
                        deleteToDo={()=>deleteTodo(item._id, setToDo)}
                        />)
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
