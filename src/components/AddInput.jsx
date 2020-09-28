import React from "react";
import Button from "./Button";

function AddInput({ placeholder }) {
  return (
    <div className="todo_add">
      <input type="text" placeholder={placeholder}></input>
      <Button>Добавить</Button>
    </div>
  );
}

export default AddInput;
