import { useState } from "react";

export default function Preview() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    if (!inputText.trim()) return; // 빈 값이면 멈추기

    const newTodo = {
      id: Date.now(),
      text: inputText,
    };

    setTodos([...todos, newTodo]);
    setInputText(""); // 입력창 비우기
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <div className="todo-input">
        <input
            type="text"
            className="todo-box"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="할 일 입력하시오"
        />
        <button
        className="add" 
        onClick={handleAdd}>+</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-text">
            {todo.text}
            <button 
            onClick={() => handleDelete(todo.id)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
