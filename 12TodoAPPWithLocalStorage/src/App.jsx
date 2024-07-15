import { useState, useEffect } from "react";
import { TodoProvider } from "./Context";

import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addItem = (item) => {
    setTodos((prev) => [{ id: Date.now(), ...item }, ...prev]);
  };

  const updateItem = (id, updatedItem) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? updatedItem : t)));
  };

  const removeItem = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleItem = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addItem, updateItem, removeItem, toggleItem }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((t) => (
              <div key={t.id} className="w-full">
                <TodoItem todo={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
