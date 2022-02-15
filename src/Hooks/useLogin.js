import { useState } from "react";

export const useLogin = (initialState = {}) => {
  const [input, setInput] = useState(initialState);

  const handleLogin = async (e) => {
      const { name, value, type } = e.target;
  };

  const reset = () => {
    setInput(initialState);
  };

  return [useLogin, handleLogin, reset]
};
