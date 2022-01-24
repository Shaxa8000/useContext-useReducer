export const shaxaReducer = (state, action) => {
  switch (action.type) {
    case 'AddOne':
          return state + 1;
      case 'AddFive':
          return state + 5;
  }
};


