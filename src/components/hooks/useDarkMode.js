import {useState, useEffect} from 'react';
import {useLocalStorage} from '../hooks/useLocalStorage';


export default useDarkMode = (key, initalValue) => {
const [darkMode, setDarkMode] = useLocalStorage(key,initalValue)

 useEffect(() => {
if(darkMode === 'ture'){
document.querySelector('body').classList.add('dark-mode')
}else{
document.querySelector('body').classList.remove('dark-mode')
}
  }, [darkMode]);

return [storedValue, setValue]
};