import React, { useEffect, useRef, useState } from "react";
//  implementing a stopwatch using Useref: we can store data inside infrastructure such as ids..
export const StopWatch = () => {
  const timerRefId = useRef(0);
  const [count, setCount] = useState(0);

  const startCounter = () => {
    if (timerRefId.current) {
      return;
    }
    timerRefId.current = setInterval(() => setCount((c) => c + 1, 1000));
  };
  const stopCounter = () => {
    clearInterval(timerRefId.current);
    timerRefId.current = 0;
  };
  const resetCounter = () => {
    clearInterval(timerRefId.current);
    timerRefId.current = 0;
    setCount(0);
  };
  //clearing sideEffects values when values get changes becouse  if the component unmounts while the stopwatch is active, the cleanup function of useEffect() is going to stop the timer too.
  useEffect(() => {
    clearInterval(timerRefId.current);
  }, []);
  return (
    <>
      <h1>Use Of Useref : StopWatch</h1>
      <h2>Timer : {count}s</h2>
      <button onClick={startCounter}>Start</button>
      <button onClick={stopCounter}>Stop</button>
      <button onClick={resetCounter}>Reset</button>
    </>
  );
};
export default StopWatch;
