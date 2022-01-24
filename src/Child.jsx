import React, { useContext } from 'react';
import { shaxaContext } from './context';

const Child = () => {
    const [state, dispatch] = useContext(shaxaContext);
    return (

      <div>
       <button onClick={()=> dispatch({type: 'AddOne' })}>AddOne</button>
       <button onClick={()=> dispatch({type: 'AddFive'})}>AddFive</button>
      </div>
    );
};

export default Child;
