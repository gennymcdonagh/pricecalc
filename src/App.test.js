import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';

it('renders correctly', () => {
  const app = renderer.create(<App />).toJSON();
  expect(app).toMatchSnapshot();
})

it('should calculate the totals correctly', () => {
  const app = shallow(<App />);
  app.instance().calculateTotals({cost:50, items:10,time:10,wage:10,markup:20});

  const correctResult = {
    "Cost to make": 15,
    "Profit": 3,
    "Retail price": 18,
  };
  expect(app.state('resultData')).toMatchObject(correctResult);
})
