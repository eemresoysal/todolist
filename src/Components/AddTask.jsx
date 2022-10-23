import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

const AddTask = ({ getTask }) => {
  let [task, setTask] = useState("");
  let [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task, date };
    console.log(newTask);
    addNewTask(newTask);
    setTask("");
    setDate("");
  };
  const addNewTask = async (newTask) => {
    const url = "https://635552da483f5d2df3b204e2.mockapi.io/api/task";
    try {
      await axios.post(url, newTask);
    } catch (error) {}
    getTask();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="d-flex text-warning justify-content-start">
            Task
          </Form.Label>
          <Form.Control
            onChange={(e) => setTask(e.target.value)}
            type="text"
            placeholder="Enter task..."
            name="task"
            id="idtask"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="d-flex justify-content-start text-warning">
            Date
          </Form.Label>
          <Form.Control
            onChange={(e) => setDate(e.target.value)}
            type="date"
            name="date"
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddTask;
