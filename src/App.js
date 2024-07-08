import React from "react";
import { useState } from "react";

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
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
