import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      setTimeout(() => {
        
      }, delay);
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
