import { TodoActionTypes, TodoState, TodoAction } from "./actionType";

const initialState: TodoState = {
  isLoading: false,
  isError: false,
  todos: [],
};
export const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.GET_TODO:
      return {
        ...state,
        isLoading: false,
        isError: false,
        todos: action.payload,
      };

    case TodoActionTypes.ADD_TODO:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case TodoActionTypes.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};
