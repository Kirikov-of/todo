import React from "react";

function Button({ children, addTask }) {
  return <button onClick={addTask}>{children}</button>;
}

export default Button;
