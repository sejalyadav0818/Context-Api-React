import { useEffect } from "react";
export function TypesUseEffect({ name }) {
  const message = `Hello, ${name}!`; // Calculates output
  //Types of use Effect
  // A) Not provided: the side-effect runs after every rendering.
  useEffect(() => {
    // Good!
    console.log("Not provided");
    document.title = `Greetings to ${name}`; // Side-effect!
  });

  // B) An empty array []: the side-effect runs once after the initial rendering.
  useEffect(() => {
    // Good!
    console.log("An empty array []");
    document.title = `Greetings to You`; // Side-effect!
  }, []);

  // C) Has props or state values [prop1, prop2, ..., state1, state2]: the side-effect runs once after initial rendering and then only when any dependency value changes

  useEffect(() => {
    // Good!
    console.log(" Has props or state values");
    document.title = `Greetings to ${name}`; // Side-effect!
  }, [name]);

  return <div>{message}</div>; // Calculates output
}
