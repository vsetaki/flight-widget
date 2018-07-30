import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { fetchFlights, changeCarrier } from '../actions/flights';
import FlightSelector from '../components/FlightSelector';
import FlightCard from '../components/FlightCard';
import Progress from '../ui/Progress';

const styles = theme => ({
  card: {
    padding: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  widget: {
    width: 500,
    margin: '0 auto',
    paddingTop: 10,
  },
});

class FlightsWidget extends Component {
  componentDidMount() {
    const { getFlights } = this.props;
    getFlights();
  }

  renderFlights() {
    const { flights } = this.props;
    return flights && flights.map(item => (
      <FlightCard key={item.id} {...item} />
    ));
  }

  render() {
    const {
      carriers, carrier, handleCarrierChange, classes,
      fetching,
    } = this.props;
    return (
      <div className={classes.widget}>
        <FlightSelector
          items={carriers}
          value={carrier}
          handleChange={handleCarrierChange}
          className={classes.card}
        />
        { fetching && <Progress />}
        {this.renderFlights()}
      </div>
    );
  }
}

FlightsWidget.propTypes = {
  getFlights: PropTypes.func.isRequired,
  handleCarrierChange: PropTypes.func.isRequired,
  flights: PropTypes.arrayOf(PropTypes.object),
  carriers: PropTypes.arrayOf(PropTypes.string),
  carrier: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  fetching: PropTypes.bool,
};

FlightsWidget.defaultProps = {
  flights: null,
  carriers: null,
  carrier: null,
  fetching: false,
};

const mapStateToProps = (state) => {
  const { data, fetching, carrier } = state.flights;
  const carriers = data && [...new Set(data.map(item => item.carrier))];
  const flights = carrier && data ? data.filter(item => item.carrier === carrier) : data;

  return {
    flights,
    fetching,
    carriers,
    carrier,
  };
};

const mapDispatchToProps = dispatch => ({
  getFlights: () => dispatch(fetchFlights()),
  handleCarrierChange: event => dispatch(changeCarrier(event.target.value)),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(FlightsWidget));
