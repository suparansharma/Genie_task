import React, { useState } from 'react';
import Todos from './Todos';
import './Home.css';
import {v4 as uuidv4} from "uuid";
import TodoNew from './TodoNew';


// const dummyTodos =[
//    { 
//     id:1,
//     title:"Title",
//     note:"abc xyz",
//     start_date:"19/09/2022",
//     end_date :"19/09/2022",
//     start_time: "12:40",
//     end_time: "13:15"

// },

// { 
//     id:2,
//     title:"Title",
//     note:"abc xyz",
//     start_date:"19/09/2022",
//     end_date :"19/09/2022",
//     start_time: "12:40",
//     end_time: "13:15"

// }

// ]



const Home = () => {
    const [todos,setTodos] = useState([]);
    const handleAddTodo = (todo) =>{
       console.log(todo); 
       setTodos((prevTodos) =>{
        return[...prevTodos,{id:uuidv4(),todo}]
       })

       console.log(todos);

    }

    const handleRemoveTodo = (id) =>{
        // alert(id);
       
        setTodos((prevTodos)=>{
            const filteredTodos = prevTodos.filter((todo)=>todo.id!==id);
            return filteredTodos;
        });

    }
    return (
        <div >
            <TodoNew onAddTodo={handleAddTodo}></TodoNew>
         
           <Todos todos={todos} onRemoveTodo={handleRemoveTodo}></Todos>
        </div>
    );
};

export default Home;