import { useState } from 'react';

const UseStateObject = () => {
  const [obj, setObj] = useState({ name: 'John', age: 45, hobby: 'Swimming' });

  const handleBtn = () => {
    setObj({ ...obj, name: 'Peter' });
  };

  console.log(obj);

  const { name, age, hobby } = obj;

  return (
    <div>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h4>Enjoy : {hobby}</h4>
      <button className="btn" onClick={handleBtn}>
        Change Info
      </button>
    </div>
  );
};

export default UseStateObject;
