import React, { useState } from 'react';

const TodoNew = (props) => {
    const [todo,setTodo] = useState({title:"",note:""});
    const {title,note,start_date,end_date,start_time,end_time} = todo;
   

    const handleChange = (event) =>{
        const name = event.target.name;
        setTodo((oldTodo) =>{
            return {...oldTodo,[name]:event.target.value}
        })
    }


    const handleSubmit = (event)=> {
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({title:"",note:"",start_date:"",end_date:"",start_time:"",end_time:""})
    }
  
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" value={title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="note">Description:</label>
                    <textarea type="text" name="note" id="note" value={note} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="start_date">Description:</label>
                    <textarea type="text" name="start_date" id="start_date" value={start_date} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="end_date">Description:</label>
                    <textarea type="text" name="end_date" id="end_date" value={end_date} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="start_time">Description:</label>
                    <textarea type="text" name="start_time" id="start_time" value={start_time} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="end_time">Description:</label>
                    <textarea type="text" name="end_time" id="end_time" value={end_time} onChange={handleChange} />
                </div>
                <button type="submit">Add todo</button>
            </form>
           
        </div>
    );
};

export default TodoNew;