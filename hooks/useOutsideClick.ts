import { useEffect, useRef } from "react";

const useOutsideClick = (callback) => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleClick = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return ref;
};

export default useOutsideClick;
