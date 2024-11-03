import { useContext } from 'react';
import styles from './counter.module.css';
import CounterContext from '../../context/counterContext'

const CounterDisplay = () => {
    const context = useContext(CounterContext);
    if (!context) return null;
    
    const { count } = context;

  return (
    <div className={styles.display}>
        <h1>Counter: {count}</h1>
    </div>
  )
}

export default CounterDisplay