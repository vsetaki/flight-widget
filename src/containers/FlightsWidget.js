import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchFlights } from '../actions/flights';

class FlightsWidget extends Component {
  componentDidMount() {
    const { getFlights } = this.props;
    getFlights();
  }

  render() {
    return (
      <div className={FlightsWidget.className}>
        {FlightsWidget.className}
      </div>
    );
  }
}

FlightsWidget.propTypes = {
  getFlights: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { data, fetching } = state.flights;

  return {
    flights: data,
    fetching,
  };
};

const mapDispatchToProps = dispatch => ({
  getFlights: () => dispatch(fetchFlights()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightsWidget);
