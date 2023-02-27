import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState('');

  function decrement() {
    setCount(prevCount => prevCount - 1);
    setStatus(' Decrement');
  }

  function increment() {
    setCount(prevCount => prevCount + 1);
    setStatus(' Increment');
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <span>{status}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
