import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDncrement = () => {
    setCount(count - 1);
  };


  return (
    <div>
       
        <button onClick={handleIncrement}>Increment</button>
        <h1>counter : {count}</h1>
        <button onClick={handleDncrement}> Decrement</button>
    </div>
  )
}

export default Counter