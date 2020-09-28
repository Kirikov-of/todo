import React from "react";

function Header({ name }) {
  return (
    <div className="todo_header">
      <h4>{name}</h4>
    </div>
  );
}

export default Header;
