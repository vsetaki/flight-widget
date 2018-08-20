import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Grid, Card, Typography } from '@material-ui/core';
import FlightIcon from '@material-ui/icons/Flight';
import FlightCard from '../FlightCard';
import flight from '../__fixtures__/FlightCardData';
import { getCarrierColor } from '../../../utils';

Enzyme.configure({ adapter: new Adapter() });


it('renders component', () => {
  const shallowed = shallow(
    <FlightCard
      {...flight}
    />,
  );

  expect(shallowed).toMatchSnapshot();
});

it('contains Card, Grid, Typography, FlightIcon', () => {
  const component = mount(
    <FlightCard
      {...flight}
    />,
  );

  expect(component.containsAllMatchingElements([Card, Grid, Typography, FlightIcon])).toBeTruthy();
});

it('contains flight icon with correct color', () => {
  const component = mount(
    <FlightCard
      {...flight}
    />,
  );
  const color = getCarrierColor(flight.carrier);

  expect(component.find(FlightIcon).prop('style')).toEqual({ fill: color });
});
