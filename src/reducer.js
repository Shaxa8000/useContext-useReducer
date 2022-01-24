export const shaxaReducer = (state, action) => {
  switch (action.type) {
    case 'AddOne':
      return { ...state, count: state.count + 1 };
    case 'AddFive':
          return { ...state, count: state.count + 5 };
      case 'nameOl': return { ...state, name: state.name = action.payload };
    case 'AddNum': return {...state, count: state.count + +state.name}
  }
};


