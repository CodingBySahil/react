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
      className={`flex gap-x-3 rounded-lg border border-black/10 px-3 py-1.5 text-black shadow-sm shadow-white/50 duration-300 ${
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
        className={`w-full rounded-lg border bg-transparent outline-none ${
          isEditing ? "border-black/10 px-2" : "border-transparent"
        } ${todo.done ? "line-through" : ""}`}
        value={text}
        onChange={(e) => setText(e.target.value)}
        readOnly={!isEditing}
      />
      <button
        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-gray-50 text-sm hover:bg-gray-100 disabled:opacity-50"
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
        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-gray-50 text-sm hover:bg-gray-100"
        onClick={() => removeItem(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
