import { useEffect, useState } from "react";
import deleteIcon from "../assets/images/delete.svg";
import { v4 as uuidv4 } from "uuid";

const TaskForm = () => {
  const [taskContent, setTask] = useState("");
  const [tasks, setTasksArray] = useState([]);

  useEffect(() => {
    setTasksArray(JSON.parse(localStorage.getItem("tasks")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addNewTask = () => {
    setTasksArray([
      ...tasks,
      {
        id: uuidv4(),
        taskContent,
        done: false,
      },
    ]);
    setTask("");
  };

  const keyHandler = (event) => {
    if (event.key === "Enter") {
      addNewTask();
    }
  };

  return (
    <div>
      <div className="mainForm">
        <input
          autoFocus
          type="text"
          value={taskContent}
          placeholder="Enter a New Task"
          onChange={(e) => {
            setTask(e.target.value);
          }}
          onKeyPress={(e) => keyHandler(e)}
        />
        <input
          type="submit"
          value="+"
          onClick={(e) => {
            addNewTask();
          }}
        />
      </div>
      <div className="task-list">
        {tasks
          .map((m) => (
            <div className="taskItem" key={m.id}>
              <span
                onClick={(e) => {
                  let lineThroughClass = e.currentTarget.className;
                  return (lineThroughClass = lineThroughClass
                    ? ""
                    : "lineThrough");
                }}
              >
                <button className="open"></button>
                {m.taskContent}
              </span>
              <img
                src={deleteIcon}
                alt="Delete Task"
                className="delete"
                onClick={() => {
                  setTasksArray(tasks.filter((obj) => obj.id !== m.id));
                }}
              />
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default TaskForm;
