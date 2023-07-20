import "./App.css";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0);

  function stepIncrement() {
    setStep(() => step + 1);
  }

  function stepDecrement() {
    if (step > 0) {
      setStep(() => step - 1);
    }
  }

  function counterIncrement() {
    setCounter(() => counter + step)
  }

  function counterDecrement() {
    setCounter(() => counter - step)
  }

  return (
    <div className="app">
      <Step
        step={step}
        stepIncrement={stepIncrement}
        stepDecrement={stepDecrement}
      />
      <Counter
        counter={counter}
        counterIncrement={counterIncrement}
        counterDecrement={counterDecrement} />
    </div>
  );
}

function Step({ step, stepIncrement, stepDecrement }) {
  return (
    <div className="step">
      <button onClick={stepDecrement}>-</button>
      <div>Step : {step}</div>
      <button onClick={stepIncrement}>+</button>
    </div>
  );
}

function Counter({ counter, counterIncrement, counterDecrement }) {
  return (
    <div className="step">
      <button onClick={counterDecrement}>-</button>
      <div>Counter : {counter}</div>
      <button onClick={counterIncrement}>+</button>
    </div>
  );
}
