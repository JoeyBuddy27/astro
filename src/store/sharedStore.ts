import { atom } from 'nanostores';

export const sharedStateNumber = atom(0);

export const incrementSharedStateNumber = () => {
    console.log('incrementSharedStateNumber');
    sharedStateNumber.set(sharedStateNumber.get() + 1);
    console.log('sharedStateNumber', sharedStateNumber.get());
}

export const decrementSharedStateNumber = () => {
    sharedStateNumber.set(sharedStateNumber.get() - 1);
}

