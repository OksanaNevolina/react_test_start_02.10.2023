import React, {useEffect, useState} from 'react';
import Todo from "./Todo";
import {todosService} from "../services/todosService";

const Todos = () => {
    const [todos,setTodos] = useState([]);
    useEffect(()=>{
        todosService.getAll().then(({data})=>setTodos(data))
    },[])
    console.log(todos);
    return (
        <div>
            <h2>Todos</h2>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default Todos;