import React from "react";
import UseRefexamples from "./UseRefexamples";
import UseStatevsUseRef from "./UseStatevsUseRef";
import StopWatch from "./StopWatch";
import DomUsinUseref from "./DomUsinUseref";

function App() {
  return (
    <div className="App">
      <h1>All About UseRef HOOK</h1>
      <UseRefexamples />
      <span>_____________________</span>
      {/* Accessing and Updatiing UseRef value*/}
      <UseStatevsUseRef />
      {/* Diff between  UseState vs UseRef value*/}
      <span>_____________________</span>
      <StopWatch />
      {/*implementing a stopwatch using Useref*/}

      <span>_____________________</span>
      <DomUsinUseref />
      {/* Accesing Dom Usin Useref*/}
      <span>_____________________</span>
    </div>
  );
}

export default App;
//REF :https://dmitripavlutin.com/react-useref/