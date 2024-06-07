import { useState } from "react";

const TodoApp = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todo, setTodo] = useState(["hello", "world"]);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodo((preValue) => {
            preValue = [...todo, newTodo];
            return preValue;
          });
        }}
      >
        Add
      </button>
      <ul>
        {todo.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoApp;
