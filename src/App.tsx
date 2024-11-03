import { CounterContextProvider } from "./context/counterContext";
import Counter from "./components/counter/Counter";
import "./App.css";

function App() {
  return (
    <>
      <CounterContextProvider>
        <Counter />
      </CounterContextProvider>
    </>
  );
}

export default App;
