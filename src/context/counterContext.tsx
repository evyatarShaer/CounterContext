import { createContext, useState, ReactNode } from "react";

interface Counter {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const CounterContext = createContext<Counter | null>(null);

export const CounterContextProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  const contextValue: Counter = {
    count,
    increment,
    decrement,
    reset,
  };

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};


export default CounterContext;