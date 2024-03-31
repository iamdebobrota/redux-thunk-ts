import React from "react";
import { Todo } from "../redux/appReducer/actionType";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
