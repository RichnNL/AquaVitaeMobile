import { useEffect, useRef } from "react";

const useInterval = (callback, delay) => {
    const savedCallback = useRef<any>(null);
  
    useEffect(() => {
      savedCallback.current= callback;
    }, [callback]);
  
    useEffect(() => {
      function tick() {
        if(savedCallback.current) {
            savedCallback.current();
        }
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  export default useInterval;