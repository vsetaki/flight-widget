import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Divider } from '../../../node_modules/@material-ui/core';

const FlightCard = ({
  carrier, arrival, departure, direction,
}) => (
  <Paper>
    <Typography>
      {carrier}
    </Typography>
    <Grid container spacing={16}>
      <Grid item xs={4}>
        {direction.from}
        {departure}
      </Grid>
      <Grid item xs={4}>
        <Divider />
      </Grid>
      <Grid item xs={4}>
        {direction.to}
        {arrival}
      </Grid>
    </Grid>
  </Paper>
);

FlightCard.propTypes = {
  carrier: PropTypes.string.isRequired,
  arrival: PropTypes.string.isRequired,
  departure: PropTypes.string.isRequired,
  direction: PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string,
  }).isRequired,
};

export default FlightCard;
