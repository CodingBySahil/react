import React, { useState } from "react";
import { useTodo } from "../Context/todoContext";

function TodoForm() {
  const [input, setInput] = useState("");
  const { addItem } = useTodo();

  const handleAdd = (e) => {
    e.preventDefault();

    if (!input) return;

    addItem({ text: input, done: false });
    setInput("");
  };

  return (
    <form onSubmit={handleAdd} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full rounded-l-lg border border-black/10 bg-white/20 px-3 py-1.5 outline-none duration-150"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="shrink-0 rounded-r-lg bg-green-600 px-3 py-1 text-white"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
