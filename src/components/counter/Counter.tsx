import CounterDisplay from "./CounterDisplay"
import CounterControls from "./CounterControls"
import styles from './counter.module.css'


const Counter = () => {
  return (
    <div className={styles.continer}>
        <CounterDisplay/>
        <CounterControls/>
    </div>
  )
}

export default Counter