import { useEffect } from "react";

export function Greet({ name }) {
  const message = `Hello, ${name}!`; // Calculates output

  // Bad!
    console.log("Greet1");
  document.title = `Greetings to ${name}`; // Side-effect!

  return <div>{message}</div>; // Calculates output
}

export function Greet2({ name }) {
  const message = `Hello, ${name}!`; // Calculates output

  useEffect(() => {
    // Good!
    console.log("Greet2");
    document.title = `Greetings to ${name}`; // Side-effect!
  }, [name]);

  return <div>{message}</div>; // Calculates output
}
