import { useEffect, useState } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    async function userData() {
      try {
        const res = await fetch('https://api.github.com/users');
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    userData();
  }, []);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
