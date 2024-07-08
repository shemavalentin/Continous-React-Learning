import React from "react";
import { useState } from "react";

export default function ManageButton() {
  return (
    <div>
      <h1> Each button is changes independently/ no state</h1>
      <CountFunction />
      <CountFunction />
    </div>
  );
}

function CountFunction() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>You clicked me{count} times</button>;
}
