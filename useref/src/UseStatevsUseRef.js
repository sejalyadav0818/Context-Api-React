import React, { useRef, useState } from "react";
/* 
 1.updateing ref  value doesnot trigger components re-rendering ***
 2.questing is what is diff between UseState and UseRef
          --- the 2 main differences between reference and state:
          1.Updating a reference doesn't trigger re-rendering, while updating the state makes the component re-render;
          2.The reference update is synchronous (the updated reference value is available right away), while the state update is asynchronous (the state variable is updated after re-rendering).
synchronous : at same time 
asynchronous : at different time
*/
const UseStatevsUseRef = () => {
  const ref = useRef(0);
  const [count, setCount] = useState(0);
  function demoUseRef() {
    // doesn't trigger re-rendering : "here I rendered" UseRef execute only one time
    console.log("before count of UseRef", ref);
    ref.current++;
    console.log("after  count of UseRef", ref);
  }
  console.log("I rendered UseRef !");
  function demoUseState() {
    //trigger re-rendering : "here I rendered" UseRef execute every time
    console.log("before count of UseState", count);
    const updateCount = count + 1;
    setCount(updateCount);
    console.log("after  count of UseState", updateCount);
  }
  console.log("I rendered UseState!");
  return (
    <div>
      <h1>Use-State vs UseRef</h1>
      <button onClick={demoUseRef}>UseRef</button>
      <span>Vs</span>
      <button onClick={demoUseState}>UseState</button>
    </div>
  );
};

export default UseStatevsUseRef;
