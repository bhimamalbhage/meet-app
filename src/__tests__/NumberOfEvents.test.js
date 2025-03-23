import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  test('default number of events is 32', () => {
    const { getByLabelText } = render(<NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />);
    expect(getByLabelText('Number of Events:')).toHaveValue(32);
  });

  test('user can change the number of displayed events', () => {
    const setCurrentNOE = jest.fn();
    const setErrorAlert = jest.fn();
    const { getByLabelText } = render(<NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert} />);
    
    const input = getByLabelText('Number of Events:');
    fireEvent.change(input, { target: { value: 10 } });

    expect(input).toHaveValue(10);
    expect(setCurrentNOE).toHaveBeenCalledWith(10);
  });
});
