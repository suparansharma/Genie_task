// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'
// import "font-awesome/css/font-awesome.min.css";
const Todo = (props) => {
    console.log("yeeessssss",props)
    const {title,note,start_date,end_date,start_time,end_time} = props.todo;
    const {id} = props;
    const handleClick = (id) =>{
        props.onRemoveTodo(id)
    }
    return (
        <div>
            <h3>{title}</h3>
            <p>{note}</p>
            <h6>{start_date}</h6><h6>{end_date}</h6>
            <h6>{start_time}</h6><h6>{end_time}</h6>
            <button onClick={()=>{handleClick(id)}}>
                {/* <i className='fa fa-trash fa-2x'></i> */}
                {/* <FontAwesomeIcon icon={faTrash} /> */}
                Delete
            </button>
            
        </div>
    );
};

export default Todo;