import axios from "axios";
import { TodoActionTypes, TodoAction, Todo } from "./actionType";
import { Dispatch } from "redux";
import { CreateToastFnReturn } from "@chakra-ui/toast";
import { AppDispatch } from "../store";

const url = "http://localhost:8080/todos";

export const getTodoAction = (payload: Todo[]): TodoAction => {
  return { type: TodoActionTypes.GET_TODO, payload: payload };
};
export const loadingTodoAction = (): TodoAction => ({
  type: TodoActionTypes.LOADING,
});

export const errorTodoAction = (): TodoAction => {
  return { type: TodoActionTypes.ERROR };
};

export const addTodoAction = (): TodoAction => ({
  type: TodoActionTypes.ADD_TODO,
});

export const toggleTodo = (id: number): TodoAction => ({
  type: TodoActionTypes.TOGGLE_TODO,
  payload: id,
});

export const getTodos = () => (dispatch: Dispatch<TodoAction>) => {
  dispatch(loadingTodoAction());
  axios
    .get(url)
    .then((res) => {
      dispatch(getTodoAction(res.data as Todo[]));
    })
    .catch((err) => {
      dispatch(errorTodoAction());
      console.log(err);
    });
};


export const addTodos =
  ({ todo, toast }: { todo: Todo; toast: CreateToastFnReturn }) =>
  (dispatch: Dispatch<TodoAction >) => {
    dispatch(loadingTodoAction());
    axios
      .post(url, todo)
      .then(() => {
        dispatch(getTodos());
        toast({
          title: "Post Todo success",
          status: "success",
          isClosable: true,
          duration: 3000,
          description: "Success",
        });
      })
      .catch((err) => {
        dispatch(errorTodoAction());
        console.log(err);
        toast({
          title: "Post Todo Failed",
          status: "error",
          isClosable: true,
          duration: 3000,
          description: "failed",
        });
      });
  };
