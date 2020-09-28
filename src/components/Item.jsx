import React from "react";

function Item({ text, index, completed, onToggleCompleted, onRemoveTask }) {
  return (
    <div
      className={`todo_quest-field ${
        completed ? "todo_quest-field--complete" : ""
      }`}
    >
      <div
        onClick={() => onToggleCompleted(index)}
        className="todo_quest-field-check"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.25 2.96875H13.1578C13.0047 2.96875 12.8594 3.03906 12.7656 3.15937L6.32345 11.3203L3.23438 7.40625C3.18765 7.34692 3.12809 7.29895 3.06017 7.26593C2.99224 7.23292 2.91772 7.21572 2.8422 7.21562H1.75001C1.64532 7.21562 1.58751 7.33594 1.65157 7.41719L5.93126 12.8391C6.13126 13.0922 6.51563 13.0922 6.7172 12.8391L14.3484 3.16875C14.4125 3.08906 14.3547 2.96875 14.25 2.96875V2.96875Z"
            fill="white"
          />
        </svg>
      </div>
      <p>{text}</p>
      <button onClick={() => onRemoveTask(index)} className="delete">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.6667 3.78947V2.52632C18.6667 1.8563 18.3857 1.21372 17.8856 0.739941C17.3855 0.266165 16.7072 0 16 0H8C7.29276 0 6.61448 0.266165 6.11438 0.739941C5.61428 1.21372 5.33333 1.8563 5.33333 2.52632V3.78947H1.33333C0.979711 3.78947 0.640573 3.92256 0.390524 4.15944C0.140476 4.39633 0 4.71762 0 5.05263C0 5.38764 0.140476 5.70893 0.390524 5.94582C0.640573 6.18271 0.979711 6.31579 1.33333 6.31579H2.66667V20.2105C2.66667 21.2156 3.08809 22.1794 3.83824 22.8901C4.58839 23.6008 5.6058 24 6.66667 24H17.3333C18.3942 24 19.4116 23.6008 20.1618 22.8901C20.9119 22.1794 21.3333 21.2156 21.3333 20.2105V6.31579H22.6667C23.0203 6.31579 23.3594 6.18271 23.6095 5.94582C23.8595 5.70893 24 5.38764 24 5.05263C24 4.71762 23.8595 4.39633 23.6095 4.15944C23.3594 3.92256 23.0203 3.78947 22.6667 3.78947H18.6667ZM16 2.52632H8V3.78947H16V2.52632ZM18.6667 6.31579H5.33333V20.2105C5.33333 20.5455 5.47381 20.8668 5.72386 21.1037C5.97391 21.3406 6.31304 21.4737 6.66667 21.4737H17.3333C17.687 21.4737 18.0261 21.3406 18.2761 21.1037C18.5262 20.8668 18.6667 20.5455 18.6667 20.2105V6.31579Z"
            fill="#9C9C9C"
          />
        </svg>
      </button>
    </div>
  );
}

export default Item;