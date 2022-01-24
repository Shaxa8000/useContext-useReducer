import React, { useContext } from 'react';
import { shaxaContext } from './context';

const Child = () => {
    const { AddOne, AddFive, ChangeTitle, AddNum } = useContext(shaxaContext);

    
    return (

      <div>
        <button onClick={AddOne}>AddOne</button>
            <button onClick={AddFive}>AddFive</button>
            <hr />
            <input onChange={(e)=> ChangeTitle(e)} type="text" placeholder='Enter a number' />
            <button onClick={AddNum}>AddNum</button>
      </div>
    );
};

export default Child;
