import React, { useEffect, useState } from 'react';

export const useLocalStorageState = <T>(
  key: string,
  defaultValue: unknown
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = useState<T>(() => {
    const valueInLocalStorage = localStorage.getItem(key);
    if (valueInLocalStorage) return JSON.parse(valueInLocalStorage);
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, 100);
    return () => clearTimeout(timeout);
  }, [key, state]);

  return [state, setState];
};
