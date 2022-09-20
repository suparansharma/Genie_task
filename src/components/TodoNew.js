import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./Home.css";
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
    <a href="#demo-modal"><Button variant="primary" className='Addbutton' >Add ToDo</Button></a>


<div id="demo-modal" class="modal">
    <div class="modal__content">
        <h3 className='fromTxt'>Add ToDo</h3>
        <div className='exemple-border-top-solid-3px'></div>
        <Form action="" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title:</Form.Label>
        <Form.Control type="text" name="title" id="title" value={title} onChange={handleChange} required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description:</Form.Label>
        <Form.Control type="text" name="note" id="note" value={note} onChange={handleChange} required/>
      </Form.Group>

      
<div style={{ display:"flex" }}>
     <div>
     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Start date</Form.Label>
        <Form.Control type="date" name="start_date" id="start_date" value={start_date} onChange={handleChange} required  />
      </Form.Group>
     </div>


    <div style={{ marginLeft:'16%' }}>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>End date</Form.Label>
        <Form.Control type="date" name="end_date" id="end_date" value={end_date} onChange={handleChange} required  />
      </Form.Group>
    </div>
</div>
    
<div style={{ display:"flex" }}>
     <div>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Start time</Form.Label>
        <Form.Control type="time" name="start_time" id="start_time" value={start_time} onChange={handleChange} required/>
      </Form.Group>
      </div>
      <div style={{ marginLeft:'20%' }}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>End time</Form.Label>
        <Form.Control  type="time" name="end_time" id="end_time" value={end_time} onChange={handleChange} required />
      </Form.Group>
      </div> 
      </div>
      <Button className='submitbutton' variant="primary" type="submit">
        Add
      </Button>

            </Form>


        <a href="#" class="modal__close">&times;</a>
    </div>
</div>
  </div>


  
            
           
    
    );
};

export default TodoNew;