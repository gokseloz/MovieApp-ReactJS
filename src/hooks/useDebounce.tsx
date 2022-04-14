import React, { useState } from "react";

const useDebounce = () => {
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout>();

  const debounce = (func: () => void, wait: number) => {
    typingTimeout && clearTimeout(typingTimeout);
    const timeout = setTimeout(() => {
      func();
    }, wait);
    setTypingTimeout(timeout);
  };

  return debounce;
};

export default useDebounce;
