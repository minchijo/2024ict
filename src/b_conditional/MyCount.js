import React from 'react';

const MyCount = ({ fruitName }) => {
  const [count, setCount] = React.useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="fruit-counter">
      <h3>{fruitName}</h3>
      <div className="counter-buttons">
        <button onClick={Increment}>▲</button>
        <span>{count}</span>
        <button onClick={Decrement}>▼</button>
      </div>
    </div>
  );
};

export default MyCount;