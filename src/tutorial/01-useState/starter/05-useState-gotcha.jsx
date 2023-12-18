import { useState } from 'react';

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const increaseValueOnClick = () => {
    setTimeout(() => {
      console.log('I got clicked');
      setCount((prev) => {
        const newValue = prev + 1;
        return newValue;
      });
    }, 3000);
  };

  return (
    <div>
      <h2>count: {count}</h2>
      <button className="btn" onClick={increaseValueOnClick}>
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
