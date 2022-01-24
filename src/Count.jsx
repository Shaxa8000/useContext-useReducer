import React, { useContext } from 'react';
import { shaxaContext } from './context';

const Count = () => {
    const {count} = useContext(shaxaContext)
    return <div>
        {count}
        <hr />
  </div>;
};

export default Count;
