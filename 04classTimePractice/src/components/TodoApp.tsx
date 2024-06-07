import React, { useState } from "react";


const TodoApp = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todo, setTodo] = useState(["hello", "world"]);

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h3 className="card-title">Todo List</h3>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter new todo"
              value={newTodo}
              onChange={(e) => {
                setNewTodo(e.target.value);
              }}
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                setTodo((prevValue) => {
                  return [...prevValue, newTodo];
                });
                setNewTodo(""); // Clear input field after adding todo
              }}
            >
              Add
            </button>
          </div>
          <ul className="list-group">
            {todo.map((element, index) => (
              <li key={index} className="list-group-item">
                {element}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
