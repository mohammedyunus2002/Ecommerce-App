import { useEffect, useState } from "react";

export const useDebounce = (value: any, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const id = setTimeout(() => {
            console.log('setting new timeout')
            setDebouncedValue(value)
        }, delay)

        return () => {
            console.log('clearing the timeout')
            clearTimeout(id)
        }
    }, [value, delay])
  return debouncedValue
}

