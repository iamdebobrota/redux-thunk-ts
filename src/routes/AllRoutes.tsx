import React from "react";
import Home from "../pages/Home";
import TodoList from "../components/TodoList";
import { Route, Routes } from "react-router";
import Todo from "../pages/Todo";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
