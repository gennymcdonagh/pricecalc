import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from './Form';

it('renders correctly', () => {
  const form = renderer.create(<Form />).toJSON();
  expect(form).toMatchSnapshot();
})
