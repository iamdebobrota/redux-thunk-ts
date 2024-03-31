import React from "react";

interface TodoItemProps {
  title: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default TodoItem;
