import React, { useRef, useEffect } from "react";
//useRef() hook is to access DOM elements directly
//Ref is null on initial rendering
const DomUsinUseref = () => {
  const elenmentRef = useRef();

  //to access DOM
  useEffect(() => {
    const DivElenment = elenmentRef.current;
    console.log(DivElenment);
  }, []);
  return (
    <div>
      Accesing DOM element  Using Useref
      <div ref={elenmentRef}>I am an Element</div>
    </div>
  );
};

export default DomUsinUseref;
