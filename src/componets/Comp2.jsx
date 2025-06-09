import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "antd";
const Comp2 = () => {
  const [taskList, setTaskList] = useState(["qwerty", "asdfg", "zxcvb"]);

  const addTask = (task) => {
    setTaskList((taskList) => {
      return [...taskList, task];
    });
  };

  const deleteLastTask = () => {
    const newArr = [...taskList];
    setTaskList(newArr.slice(0, newArr.length - 1));
  };

  return (
    <div className="container">
      <h1>Cписок задач</h1>
      <ul>
        {taskList.map((item) => (
          <li key={uuidv4()}>{item}</li>
        ))}
      </ul>
      <Button onClick={() => addTask("task")}>Добавить задачу</Button>
      <Button onClick={deleteLastTask}>Удалить последнюю задачу</Button>
    </div>
  );
};

export { Comp2 };
