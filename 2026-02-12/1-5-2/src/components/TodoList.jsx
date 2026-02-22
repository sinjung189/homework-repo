import { useState, useReducer } from "react";
import TodoReducer from "./TodoReducer";
import "../App.css";

export default function TodoList() {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch({ type: "ADD", payload: text });
    setText("");
  };

  return (
    <div className="todo-card">
      <div className="todo-content">
        <input
          className="todo-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="todo-add" onClick={handleAdd}>
          추가
        </button>
      </div>
      <ul
        className="todo-item"
        // style={{
        //   padding: "0",
        //   listStyle: "none",
        //   display: "flex",
        //   flexDirection: "column",
        //   gap: "15px",
        // }}
      >
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              // style={{ transform: "scale(1.5)" }}
              className="checkbox-size"
              type="checkbox"
              checked={todo.done}
              onClick={() =>
                dispatch({
                  type: "TOGGLE",
                  payload: todo.id,
                })
              }
            />
            <span
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                marginLeft: "20px",
              }}
            >
              {todo.text}
            </span>
            <button
              className="delete-btn"
              onClick={() =>
                dispatch({
                  type: "DELETE",
                  payload: todo.id,
                })
              }
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
