import React from 'react';
import {render} from '@testing-library/react-native';
import AddButton from '../AddButton';
describe('AddButton', () => {
  test('Should render correctly', () => {
    const wrapper = render(<AddButton label="" onPress={jest.fn()} />);
    wrapper.getByTestId('add-button');
  });

  test('Should render label correctly', () => {
    const wrapper = render(
      <AddButton label="mock-label" onPress={jest.fn()} />
    );
    wrapper.getByText('mock-label');
  });

  test('Should accept custom view props', () => {
    const wrapper = render(
      <AddButton label="" onPress={jest.fn()} testID="add-button" />
    );
    wrapper.getByTestId('add-button');
  });
});
