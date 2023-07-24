import { useRef } from "react";
// useref : create persisted multable values
function useRefexamples() {
  const initialValue = 0;
  const reference = useRef(initialValue);

  // Access reference value:
  const value = reference.current;
  console.log("after ", value);

  // Update reference value:
  const newValue = (reference.current = 10);
  console.log("before ", newValue);
  return <h1>useRef examples updateing useref value</h1>;
}

export default useRefexamples;
