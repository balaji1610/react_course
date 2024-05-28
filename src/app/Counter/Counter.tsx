import { useState } from "react";
export default function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const stepClick = (type: string) => {
    if (type == "Increase") {
      setStep((prev) => prev + 1);
    } else {
      setStep((prev) => prev - 1);
    }
  };

  const countClick = (type: string) => {
    if (type == "Increase") {
      setCount((prev) => prev + step);
    } else {
      setCount((prev) => prev - step);
    }
  };
  let date = new Date();

  date.setDate(date.getDate() + count);

  let currentDate;

  if (count == 0) {
    currentDate = `Today is`;
  } else if (Math.sign(count) == 1) {
    currentDate = `${count} days from Today`;
  } else {
    currentDate = `${Math.abs(count)} day ago from Today`;
  }

  return (
    <div>
      <div>
        <button onClick={() => stepClick("Decrease")}>-</button>
        Step{step}
        <button onClick={() => stepClick("Increase")}>+</button>
      </div>

      <div>
        <button onClick={() => countClick("Decrease")}>-</button>
        Count{count}
        <button onClick={() => countClick("Increase")}>+</button>
      </div>

      <div>
        {currentDate}&nbsp;
        {date.toDateString()}
      </div>
    </div>
  );
}
