import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { NumberInput } from './NumberInput';

it('renders correctly', () => {
  const numberInput = renderer.create(<NumberInput/>).toJSON();
  expect(numberInput).toMatchSnapshot();
})
