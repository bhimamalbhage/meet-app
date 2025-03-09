import React, { useState } from 'react';

const NumberOfEvents = ({ setEventCount }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);
    setEventCount(value);
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
