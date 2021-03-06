import React, { useContext } from 'react';
import { shaxaContext } from './context';

const Count = () => {
    const [state, dispatch] = useContext(shaxaContext);
    return <div>
        {state.count}
        <hr />
  </div>;
};

export default Count;
