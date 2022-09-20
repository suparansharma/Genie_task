import { faTrash,faPenToSquare,faBox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./Home.css";
const Todo = (props) => {
  const { title, note, start_date, end_date, start_time, end_time } =
    props.todo;
  const { id } = props;
  const handleClick = (id) => {
    props.onRemoveTodo(id);
  };
  return (
    <div style={{ margin: "35px" }}>
      <Card className="submit-area" style={{ display: "flex" }}>
        <Card.Body>
          <Card.Title> <b>{title}</b> </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{note}</Card.Subtitle>
          <Card.Text>
            <p>
              Start Date: {start_date} at {start_time}- {end_date} at {end_time}{" "}
            </p>
          </Card.Text>
        </Card.Body>
        <FontAwesomeIcon className="ShowIcon" icon= {faBox} />
        <a className="editIcon"href="#demo-modal"><FontAwesomeIcon  icon= {faPenToSquare} /></a>
          <FontAwesomeIcon className="deleteIcon"  onClick={() => {
            handleClick(id);
          }} icon={faTrash} />


        
      </Card>



      <div id="demo-modal" class="modal">
    <div class="modal__content">
    <h3 className='fromTxt'>Edit ToDo</h3>
        <div className='exemple-border-top-solid-3px'></div>
        <Form action="" >
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title:</Form.Label>
        <Form.Control type="text" name="title" id="title" value={title}  required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description:</Form.Label>
        <Form.Control type="text" name="note" id="note" value={note}  required/>
      </Form.Group>

      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Start date</Form.Label>
        <Form.Control type="text" name="start_date" id="start_date" value={start_date}  required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>End date</Form.Label>
        <Form.Control type="text" name="end_date" id="end_date" value={end_date}  required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>start time</Form.Label>
        <Form.Control type="text" name="start_time" id="start_time" value={start_time}  required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>end_time</Form.Label>
        <Form.Control type="text" name="end_time" id="end_time" value={end_time}  required />
      </Form.Group>

      <Button className='submitbutton' variant="primary" type="submit">
       Save Change
      </Button>

            </Form>


        <a href="#" class="modal__close">&times;</a>
    </div>
</div>
    </div>
  );
};

export default Todo;
