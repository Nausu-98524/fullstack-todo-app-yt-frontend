import axios from "axios";


// const baseUrl = "http://localhost:8000/get"
const baseUrl2 = "http://localhost:8000"

const getAllToDo = (setToDo) =>{
    axios.get(`${baseUrl2}/get`)
    .then(({data}) => {
        console.log('data...', data);
        setToDo(data)
    })
}

const addToDo = (text, setText, setToDo)=>{
    axios.post(`${baseUrl2}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    }).catch((err) => console.log(err))
}


const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating)=>{
    axios.post(`${baseUrl2}/update`, {_id:toDoId, text})
    .then((data) => {
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const deleteTodo = (_id, setToDo)=>{
    axios.post(`${baseUrl2}/delete`, {_id})
    .then((data) => {
        console.log(data);
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}


export {getAllToDo, addToDo, updateToDo, deleteTodo}