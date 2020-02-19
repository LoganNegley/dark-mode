import {useState} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';


export default useDarkMode = (key, initalValue) => {
const [darkMode, setDarkMode] = useLocalStorage('storedValue')
};