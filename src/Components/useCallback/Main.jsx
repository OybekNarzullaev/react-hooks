import { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const title = "useCallback";

const Main = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(10000);

  const incrementAge = useCallback(() => setAge(age + 1), [age]);
  const incrementSalary = useCallback(() => setSalary(salary + 1000), [salary]);

  return (
    <div>
      <Title title={title} />
      <Count text="Age" count={age} />
      <Button handler={incrementAge}>Increment age</Button>
      <Count text="Age" count={salary} />
      <Button handler={incrementSalary}>Increment salary</Button>
    </div>
  );
};

export default Main;
