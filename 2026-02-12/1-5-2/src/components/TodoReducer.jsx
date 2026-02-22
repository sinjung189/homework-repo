export default function TodoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          done: false,
        },
      ];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

// 대문자 익숙해지기..
