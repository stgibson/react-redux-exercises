/**
 * Keeps track of list of memes, where each meme has an id, image source, top
 * text, and bottom text
 * @param {Array[Object{number|string}]} state 
 * @param {Object{string|Object{string}|string}} action 
 * @returns updated version of state, based on action
 */
const memeReducer = (state={ memes: [] }, action) => {
  switch(action.type) {
    case "ADD":
      return { ...state, memes: [...state.memes, action.payload] };
    case "DELETE":
      return {
        ...state,
        memes: state.memes.filter(meme => meme.id !== action.id)
      };
    default:
      return state;
  }
};

export default memeReducer;