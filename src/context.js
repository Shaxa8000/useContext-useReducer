import React, {createContext, useState} from 'react';

export const shaxaContext = createContext();

const Context = ({children}) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

const AddOne = () => {
  setCount(count + 1);
};

const AddFive = () => {
  setCount(count + 5);
    };
    
    const ChangeTitle = (e) => {
        setName(e.target.value)
    };

    const AddNum = () => {
        setCount(count + +name)
    }



    return <shaxaContext.Provider value={{count, AddOne, AddFive, name, ChangeTitle, AddNum}} >
      {children}
  </shaxaContext.Provider>;
};

export default Context;
