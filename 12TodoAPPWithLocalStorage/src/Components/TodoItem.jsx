import React, { useState } from "react";
import { useTodo } from "../Context/todoContext";

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  const { updateItem, removeItem, toggleItem } = useTodo();

  const handleEdit = () => {
    updateItem(todo.id, { ...todo, text });
    setIsEditing(false);
  };

  const handleToggle = () => {
    toggleItem(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.done ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.done}
        onChange={handleToggle}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEditing ? "border-black/10 px-2" : "border-transparent"
        } ${todo.done ? "line-through" : ""}`}
        value={text}
        onChange={(e) => setText(e.target.value)}
        readOnly={!isEditing}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.done) return;

          if (isEditing) {
            handleEdit();
          } else setIsEditing((prev) => !prev);
        }}
        disabled={todo.done}
      >
        {isEditing ? "📁" : "✏️"}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => removeItem(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
