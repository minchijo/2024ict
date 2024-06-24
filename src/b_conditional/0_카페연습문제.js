import React, { useState } from 'react';
import "../App.css";

const FruitCounter = ({ fruit }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{fruit}<button onClick={decrementCount}>▲</button><span>{count}</span>
      <button onClick={incrementCount}>▼</button></h2>
    </div>
  );
};

const App = () => {
  return (
    <div className='App'>
      <FruitCounter fruit="사과" />
      <FruitCounter fruit="배" />
      <FruitCounter fruit="귤" />
    </div>
  );
};

export default App;