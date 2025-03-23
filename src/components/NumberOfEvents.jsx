import React, { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    if (value === '') {
      setErrorAlert('Number of events cannot be empty');
      setNumber(value);
      return;
    }
    
    const numberValue = Number(value);
    
    if (isNaN(numberValue)) {
      setErrorAlert('Please enter a valid number');
      setNumber(value);
      return;
    }
    
    if (numberValue <= 0) {
      setErrorAlert('Number of events must be greater than 0');
      setNumber(value);
      return;
    }
    
    if (numberValue > 100) {
      setErrorAlert('Number of events cannot exceed 100');
      setNumber(value);
      return;
    }
    
    setErrorAlert('');
    setNumber(value);
    setCurrentNOE(numberValue);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="event-number">Number of Events: </label>
      <input
        id="event-number"
        type="number"
        className="event-number-input"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;