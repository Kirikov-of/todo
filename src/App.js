import React from "react";
import "./App.scss";
import { Header, AddInput, Item } from "./components/index";

function App() {
  const [tasks, setTasks] = React.useState([
    {
      text: "Изучить ReactJs",
      completed: false,
    },
    {
      text: "Сверстать SPA",
      completed: true,
    },
  ]);

  const onToggleCompleted = (index) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task, currIndex) => {
        if (index === currIndex) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    });
  };

  const onRemoveTask = (index) => {};

  return (
    <div className="todo">
      <Header name="Список задач" />
      <AddInput placeholder="Добавить список задач..." />

      <div className="todo_quest">
        {tasks.map((task, index) => (
          <Item
            text={task.text}
            key={index}
            index={index}
            completed={task.completed}
            onToggleCompleted={onToggleCompleted}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
