import { useState } from "react";

const TodoApp = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todo, setTodo] = useState(["woke up early", "do prayer", "recite quran", "do exercise"]);

  // show function
  const show = () => {
    setTodo((prevValue) => {
      return [...prevValue, newTodo];
    });
    setNewTodo("");
  };

  // delete function
  const del = (i: number) => {
    setTodo((prevValue) => {
      return prevValue.filter((val, index) => {
        if (index !== i) {
          return val;
        }
      });
    });
  };

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
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  show();
                }
              }}
              onChange={(e) => {
                setNewTodo(e.target.value);
              }}
            />
            <button className="btn btn-primary" onClick={show}>
              Add
            </button>
          </div>
          <ul className="list-group">
            {todo.map((element, index) => (
              <li key={index} className="list-group-item">
                {element}
                <button
                  className="ms-5 btn btn-danger btn-sm"
                  onClick={() => del(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
