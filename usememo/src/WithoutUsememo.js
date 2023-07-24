import React, { useState } from "react";

const WithoutUsememo = () => {
  const [number, setnumber] = useState(1);
  const [inc, setInc] = useState(0);
  const factorial = factorialof(number);
  const onChange = (e) => {
    setnumber(Number(e.target.value));
  };
  const onClick = () => setInc((c) => c + 1);

  return (
    <>
      <div>Without Usememo</div>
      <input type="number" value={number} onChange={onChange} />
      is {factorial} <button onClick={onClick}>re-renders</button>
    </>
  );
};
const factorialof = (n) => {
  console.log("factorial fucntion called !!!"); //here without using useMemo function each time you click Re-render button, inc state value is updated. Updating inc state value triggers <CalculateFactorial /> re-rendering. But, as a secondary effect, during re-rendering the factorial is recalculated again — 'factorialOf(n) called!' is logged to console.
  return n <= 0 ? 1 : n * factorialof(n - 1);
};
export default WithoutUsememo;
