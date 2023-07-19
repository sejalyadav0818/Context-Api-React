import { useEffect } from "react";
// every 2 seconds the message prop is logged to the console:
export  function SideEffectCleanup({ message }) {

    useEffect(() => {
      setInterval(() => {
        console.log(message);
      }, 2000);
    }, [message]);

    return <div>I'm logging to console "{message}"</div>;
  }


//now we should clean this useEffect 

export function SideEffectCleanupp({ message }) {
  useEffect(() => {
const id =setInterval(() => {
      console.log(message);
    }, 2000);
     return () => {
       clearInterval(id);
     };
  }, [message]);

  return <div>I'm logging to console "{message}"</div>;
}