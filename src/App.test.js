import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';

jest.mock('./components/Form/Form', () => 'Form')

it('renders correctly', () => {
  const app = renderer.create(<App />).toJSON();
  expect(app).toMatchSnapshot();
})


