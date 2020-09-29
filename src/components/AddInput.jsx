import React from "react";
import Button from "./Button";

function AddInput({ placeholder, onAddTask }) {
  const [text, setText] = React.useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const addTask = () => {
    if (text) {
      onAddTask(text);
      setText("");
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      addTask();
    }
  };

  return (
    <div className="todo_add">
      <input
        onKeyUp={handleKeyUp}
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
      ></input>
      <Button addTask={addTask}>Добавить</Button>
    </div>
  );
}

export default AddInput;
