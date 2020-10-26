import React, { useState } from 'react';

export const Hello = () => {
  const [counter, setCounter] = useState(0);
  const [secondaryCounter, setSecondaryCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
    setSecondaryCounter(secondaryCounter + 1)
  };

  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
      <p>Someone (including yourself) pressed the button {secondaryCounter} times.</p>
    </div>
  );
};
