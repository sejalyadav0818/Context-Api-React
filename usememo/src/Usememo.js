import React, { useState, useMemo } from "react";
/*accepts two args 1.computes function 2.depandancy array
    const memoizedResult = useMemo(compute, dependencies);
   memoized : turning [the results of] a function into something to be remembered".
Simple example ofcalculating  factorial of no  using
 usememo   */
const Usememo = () => {
  const [number, setnumber] = useState(1);
  const [inc, setInc] = useState(0);

  //using useMEMO
  const factorial = useMemo(() => factorialof(number), [number]);
  const onChange = (e) => {
    setnumber(Number(e.target.value));
  };
  const onClick = () => setInc((c) => c + 1);
  //   const factorial = factorialof(number);

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
};
const factorialof = (n) => {
  console.log("factoral() called !!!");
  return n <= 0 ? 1 : n * factorialof(n - 1);
};
export default Usememo;
