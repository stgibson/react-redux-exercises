/**
 * Handles todos for an app
 * @param {Object{Array[Object{string}]}} state 
 * @param {Object{string|Object{string}}} action 
 * @returns new value of state
 */
const todoReducer = (state={ todos: [] }, action) => {
  switch(action.type) {
    case "ADD":
      return { ...state, todos: [...state.todos, action.payload] };
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
};

export default todoReducer;