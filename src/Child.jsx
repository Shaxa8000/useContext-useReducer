import React, { useContext } from 'react';
import { shaxaContext } from './context';

const Child = () => {
  const [state, dispatch] = useContext(shaxaContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: 'AddOne' })}>AddOne</button>
      <button onClick={() => dispatch({ type: 'AddFive' })}>AddFive</button>
          <br />
          <input onChange={(e)=> dispatch({type: 'nameOl', payload: e.target.value})} type="text" placeholder='Enter number' />
          <button onClick={()=> dispatch({type: 'AddNum'})}>AddNum</button>
    </div>
  );
};

export default Child;
