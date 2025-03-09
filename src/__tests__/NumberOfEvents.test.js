import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  test('default number of events is 32', () => {
    const { getByLabelText } = render(<NumberOfEvents setEventCount={() => {}} />);
    expect(getByLabelText('Number of Events:')).toHaveValue(32);
  });

  test('user can change the number of displayed events', () => {
    const setEventCount = jest.fn();
    const { getByLabelText } = render(<NumberOfEvents setEventCount={setEventCount} />);
    
    const input = getByLabelText('Number of Events:');
    fireEvent.change(input, { target: { value: 10 } });

    expect(input).toHaveValue(10);
    expect(setEventCount).toHaveBeenCalledWith('10');
  });
});
