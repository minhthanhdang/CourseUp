import { useState, useEffect } from "react";

// Handle inputs
const getLocalValue = (key, initValue) => {
    // No Local Storage
    if (typeof window === 'undefined') return initValue;

    // Value exists
    const localValue = JSON.parse(localStorage.getItem(key));
    if (localValue) return localValue;

    // Function
    if (initValue instanceof Function) return initValue();

    return initValue;
}

const useLocalStorage = (key, initValue) => {
    const [value, setValue] = useState(() => {
        return getLocalValue(key, initValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])

    return [value, setValue];
}

export default useLocalStorage
