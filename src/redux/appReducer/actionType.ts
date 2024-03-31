export interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  isLoading: boolean;
  isError: boolean;
  todos: Todo[];
}

export enum TodoActionTypes {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  GET_TODO = "GET_TODO",
  LOADING = "LOADING",
  ERROR = "ERROR",
}

interface AddTodoAction {
  type: TodoActionTypes.ADD_TODO;
}
interface GetTodoAction {
  type: TodoActionTypes.GET_TODO;
  payload: Todo[];
}

interface ToggleTodoAction {
  type: TodoActionTypes.TOGGLE_TODO;
  payload: number;
}
interface LoadingTodoActionType {
  type: TodoActionTypes.LOADING;
}
interface ErrorTodoActionType {
  type: TodoActionTypes.ERROR;
}

export type TodoAction =
  | AddTodoAction
  | ToggleTodoAction
  | GetTodoAction
  | LoadingTodoActionType
  | ErrorTodoActionType;
