import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FlightIcon from '@material-ui/icons/Flight';
import Card from '../../ui/Card';
import { getTime, getDate, getCarrierColor } from '../../utils';

const styles = theme => ({
  card: {
    padding: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  infoBlock: {
    textAlign: 'center',
  },
  flightIcon: {
    transform: 'rotate(90deg)',
    margin: '20px auto 0',
    display: 'block',
    fill: '#4a4a4a',
    fontSize: '2em',
  },
});

const FlightCard = ({
  carrier, arrival, departure, direction,
  classes,
}) => (
  <Card>
    <Grid container spacing={16}>
      <Grid item xs={4} className={classes.infoBlock}>
        <Typography variant="subheading">
          {direction.from}
        </Typography>
        <Typography variant="headline">
          {getTime(departure)}
        </Typography>
        <Typography variant="subheading">
          {getDate(departure)}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <FlightIcon className={classes.flightIcon} style={{ fill: getCarrierColor(carrier) }} />
        <Typography variant="caption" className={classes.infoBlock}>
          {carrier}
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.infoBlock}>
        <Typography variant="subheading">
          {direction.to}
        </Typography>
        <Typography variant="headline">
          {getTime(arrival)}
        </Typography>
        <Typography variant="subheading">
          {getDate(arrival)}
        </Typography>
      </Grid>
    </Grid>
  </Card>
);

FlightCard.propTypes = {
  carrier: PropTypes.string.isRequired,
  arrival: PropTypes.string.isRequired,
  departure: PropTypes.string.isRequired,
  direction: PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(FlightCard);
