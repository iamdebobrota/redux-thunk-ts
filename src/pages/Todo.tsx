import TodoList from "../components/TodoList";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { Container, Heading } from "@chakra-ui/layout";
import TodoInput from "../components/TodoInput";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "../redux/appReducer/action";

const Todo = () => {
  const { todos, isLoading, isError } = useSelector(
    (state: RootState) => state.todo
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const handleToggle = (id: number) => {
    console.log(id);
  };
  return (
    <Container>
      <Heading as="h1">Todo</Heading>
      <TodoInput />
      {isLoading && <>Loading...</>}

      <TodoList todos={todos} toggleTodo={handleToggle} />
    </Container>
  );
};

export default Todo;
