import React from "react";
import { useState } from "react";
import Board from "./tic-tak-toe";

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <Board />
      <h1>Both buttons chages when one is clicked</h1>
      <MyButton count={count} onClick={handleClick} />
      <br />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}> You click me {count} times </button>;
}
