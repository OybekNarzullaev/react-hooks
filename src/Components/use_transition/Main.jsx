import { useTransition } from "react";
import { useState } from "react";
import NAMES from "./data.json";

const Main = () => {
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");

  const [isPending, startTransition] = useTransition();

  const changeHandler = (event) => {
    setInputValue(event.target.value);
    startTransition(() => setQuery(event.target.value));
  };

  const filteredName = NAMES.filter(
    (item) => item.first_name.includes(query) || item.last_name.includes(query)
  );
  return (
    <div>
      <input type="text" onChange={changeHandler} value={inputValue} />
      <br />
      {isPending && <p>updating...</p>}
      {filteredName.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  );
};

export default Main;
