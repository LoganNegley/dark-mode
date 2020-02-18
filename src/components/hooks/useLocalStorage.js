import {useState} from 'react';

export default const useLocalStorage = (key, initalValue) => {
const [storedValue, setStoredValue] = useState(() => {
    const item = window.useLocalStorage.getItem(key);
    return item ? JSON.parse(item) : initalValue;
});

const setValue = value =>{
    setStoredValue(value);
    window.localStorage.setItem(key,JSON.stringigy(value));
};

return [storedValue]
};