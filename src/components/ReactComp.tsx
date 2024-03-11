import React, { useState } from 'react';
import {
    sharedStateNumber,
    decrementSharedStateNumber,
    incrementSharedStateNumber,
} from '../store/sharedStore';
import { useStore } from '@nanostores/react';

type props = {
    title: string;
};

const ReactComp = ({ title }: props) => {
    const [number, setNumber] = useState(0);

    const sharedStateNumberState = useStore(sharedStateNumber);

    const increment = () => {
        setNumber(number + 1);
    };

    return (
        <div className='bg-blue-400 p-4 my-4'>
            <h1 className='text-white'>{title}</h1>
            <button
                className='outline-2 p-4 my-2 rounded bg-slate-50 text-black'
                onClick={increment}
            >
                Increment React Number
            </button>
            <h2 className='text-white'>{number}</h2>

            <button
                className='p-4 mt-4 bg-slate-900 rounded'
                onClick={incrementSharedStateNumber}
            >
                Increment Shared State Number
            </button>
        </div>
    );
};

export default ReactComp;
