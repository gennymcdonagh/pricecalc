import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Result } from './Result';

it('renders correctly', () => {
  const result = renderer.create(<Result resultData={[{sectionName: "name", sectionData: {"key1":1,"key2":2}}]}/>).toJSON();
  expect(result).toMatchSnapshot();
})
