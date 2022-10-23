import { useState, useEffect } from "react";
import AddTask from "../Components/AddTask";
import TaskList from "../Components/TaskList";
import axios from "axios";
import Homecss from "./Homecss.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState([]);
  const url = "https://635552da483f5d2df3b204e2.mockapi.io/api/task";

  const toggle = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    setText(buttonText);
  };

  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
  };
  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="container border border-2 w-50 home">
      <div className="title">TASK TRACKER</div>
      <button onClick={() => toggle()} className="btn btn-danger mt-4">
        {text}
      </button>
      <div>
        {isOpen && <AddTask getTask={getTask} />}
        <TaskList task={task} getTask={getTask} />
      </div>
    </div>
  );
};

export default Home;
