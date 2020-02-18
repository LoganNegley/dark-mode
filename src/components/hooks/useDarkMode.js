import {useState} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';


export default const useDarkMode = (key, initalValue) => {
const [someValue, setSomeValue] = useLocalStorage('myKey')
};