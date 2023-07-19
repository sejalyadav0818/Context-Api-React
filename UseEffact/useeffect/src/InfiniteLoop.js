import { useEffect, useState } from "react";

// The infinite loop and side-effect updating state
export function CountInputChnages() {
  const [value, setValues] = useState("");
  const [count, setCount] = useState(-1);

  useEffect(() => {
    setCount(count + 1);
  });
  const onChange = ({ e }) => {
    setValues(e.value);
  };
  return (
    <>
      <input type="text" value={value} onChange={onChange} readOnly />
      <div>Number of changes: {count}</div>
    </>
  );
}

//Fixing dependencies by providing value as depandencies as values
export function CountInputChnagess() {
  const [value, setValues] = useState("");
  const [count, setCount] = useState(-1);

  useEffect(() => {
    setCount(count + 1);
  }, [value]);
  const onChange = ({ target }) => setValues(target.value);
  return (
    <>
      <input type="text" value={value} onChange={onChange} />
      <div>Number of changes: {count}</div>
    </>
  );
}
