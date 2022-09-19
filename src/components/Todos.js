import React from 'react';
import Todo from './Todo';
import './Todos.css'

const Todos = (props) => {
    console.log(props);
    return (
        <div>
           <section className='todos'>
            {
                props.todos.map((todo)=> <Todo todo={todo.todo} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo}></Todo>)
            }
           </section>
        </div>
    );
};

export default Todos;