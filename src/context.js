import React, { createContext, useReducer } from 'react';
import { shaxaReducer } from './reducer';

export const shaxaContext = createContext();

const Context = ({ children }) => {

    const [state, dispatch] = useReducer(shaxaReducer, 0);
    
  return (
    <shaxaContext.Provider value={[state, dispatch]}>
      {children}
    </shaxaContext.Provider>
  );
};

export default Context;
