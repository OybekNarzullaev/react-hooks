import { useMemo, useState } from "react";

const Main = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => setCounterOne(counterOne + 1);
  const incrementTwo = () => setCounterTwo(counterTwo + 1);

  const isEven = useMemo(() => {
    console.log("iseven called...");
    let i = 0;
    while (i < 100000000) {
      i++;
    }
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <h1>UseMemo</h1>
      <div>
        <button onClick={incrementOne}>IncrementOne {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>IncrementTwo {counterTwo}</button>
      </div>
    </div>
  );
};

export default Main;
