"use client";

import { useEffect, useState } from "react";


const Todos = () => {

    const [todos,setTodos] = useState([]);

    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json))
    },[])

  return (
    <div>
      <ul>
        {todos?.length > 0 && todos?.map((todos: any,index:number) => <li key={index}>{todos.title}</li>)}
      </ul>
    </div> 
  )
}

export default Todos
