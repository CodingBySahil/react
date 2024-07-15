import { createContext, useContext } from "react";

export const TodoCtx = createContext({
  items: [
    {
      id: 1,
      text: "Todo message",
      done: false,
    },
  ],
  addItem: (item) => {},
  updateItem: (id, item) => {},
  removeItem: (id) => {},
  toggleItem: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoCtx);
};

export const TodoProvider = TodoCtx.Provider;
