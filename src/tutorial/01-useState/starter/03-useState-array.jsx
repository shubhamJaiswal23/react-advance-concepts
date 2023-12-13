import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((people) => people.id !== id);
    setPeople(newPeople);
  };

  return (
    <div>
      {people.map(({ id, name }) => {
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button onClick={() => setPeople([])}>clear all</button>
    </div>
  );
};

export default UseStateArray;
