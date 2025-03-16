import React, { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);
    setCurrentNOE(Number(value));
  };

  return (
    <div>
      <label htmlFor="event-number">Number of Events: </label>
      <input
        id="event-number"
        type="number"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
