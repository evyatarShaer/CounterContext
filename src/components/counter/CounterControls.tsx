import { useContext } from 'react';
import styles from './counter.module.css';
import CounterContext  from "../../context/counterContext";

const CounterControls = () => {
    const context = useContext(CounterContext);
    if (!context) return null;

    const { increment, decrement, reset } = context;

  return (
    <div className={styles.buttons}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterControls