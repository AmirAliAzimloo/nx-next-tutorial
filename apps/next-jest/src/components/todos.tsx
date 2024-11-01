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
      
    </div>
  )
}

export default Todos
