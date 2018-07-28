import getFlights from '../api/getFlights';

export const FETCH_FLIGHTS = 'FETCH_FLIGHTS';
export const FETCH_FLIGHTS_SUCCESS = `${FETCH_FLIGHTS}_SUCCESS`;
export const FETCH_FLIGHTS_FAIL = `${FETCH_FLIGHTS}_FAIL`;

export const requestFlights = payload => ({
  type: FETCH_FLIGHTS,
  payload,
});

export const receiveFlights = payload => ({
  type: FETCH_FLIGHTS_SUCCESS,
  payload,
});

export const failFlights = payload => ({
  type: FETCH_FLIGHTS_FAIL,
  payload,
});

export const fetchFlights = () => (dispatch) => {
  dispatch(requestFlights());
  getFlights()
    .then(data => dispatch(receiveFlights(data)))
    .catch(error => dispatch(failFlights(error)));
};
