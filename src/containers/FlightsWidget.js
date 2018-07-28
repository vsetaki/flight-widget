import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchFlights, changeCarrier } from '../actions/flights';
import FlightSelector from '../components/FlightSelector';
import FlightCard from '../components/FlightCard';

class FlightsWidget extends Component {
  componentDidMount() {
    const { getFlights } = this.props;
    getFlights();
  }

  renderFlights() {
    const { flights } = this.props;
    return flights && flights.map(item => (<FlightCard key={item.id} {...item} />));
  }

  render() {
    const { carriers, carrier, handleCarrierChange } = this.props;
    return (
      <div className={FlightsWidget.className}>
        <FlightSelector
          items={carriers}
          value={carrier}
          handleChange={handleCarrierChange}
        />
        {this.renderFlights()}
      </div>
    );
  }
}

FlightsWidget.className = 'flights-widget';

FlightsWidget.propTypes = {
  getFlights: PropTypes.func.isRequired,
  handleCarrierChange: PropTypes.func.isRequired,
  flights: PropTypes.arrayOf(PropTypes.object),
  carriers: PropTypes.arrayOf(PropTypes.string),
  carrier: PropTypes.string,
};

FlightsWidget.defaultProps = {
  flights: null,
  carriers: null,
  carrier: null,
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

export default connect(mapStateToProps, mapDispatchToProps)(FlightsWidget);
