import {useState} from 'react';

export const useLocalStorage = (key, initalValue) => {
const [storedValue, setStoredValue] = useState(() => {
    const item = window.useLocalStorage.getItem(key);
    return item ? JSON.parse(item) : initalValue;
})

return [storedValue]
};