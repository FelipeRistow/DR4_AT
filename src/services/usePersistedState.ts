import { useEffect, useState } from "react";

const usePersistedState = <Type>(key: string, initialValue: Type): [Type, (value: Type) => void] => {
    const storeKey = `persisted-state-${key}`;

    const getValue = () => {
        const storedValue = localStorage.getItem(storeKey);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    };

    const [value, setValue] = useState<Type>(getValue);

    useEffect(() => {
        localStorage.setItem(storeKey, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};

export default usePersistedState;
