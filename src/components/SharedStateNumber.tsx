import React from 'react';
import { useStore } from '@nanostores/react';
import { sharedStateNumber } from '../store/sharedStore';

const SharedStateNumber = () => {
    const sharedStateNumberValue = useStore(sharedStateNumber);

    return (
        <div className='p-5 bg-gray-900'>
            <h1 className='text-3xl text-white'>Shared State Number</h1>
            <p className='text-white'>{sharedStateNumberValue}</p>
        </div>
    );
};

export default SharedStateNumber;
