import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Result from './Result';

it('renders correctly', () => {
  const result = renderer.create(<Result data={{"key1":"val1","key2":"val2"}}/>).toJSON();
  expect(result).toMatchSnapshot();
})
