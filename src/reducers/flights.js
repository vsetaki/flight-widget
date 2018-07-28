import {
  FETCH_FLIGHTS, FETCH_FLIGHTS_SUCCESS, FETCH_FLIGHTS_FAIL, CHANGE_CARRIER,
} from '../actions/flights';

const initialState = {
  data: null,
  carrier: null,
};

const flights = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLIGHTS:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_FLIGHTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        fetching: false,
      };
    case FETCH_FLIGHTS_FAIL:
      return {
        ...state,
        data: null,
        fetching: false,
      };
    case CHANGE_CARRIER:
      return {
        ...state,
        carrier: action.payload,
      };
    default:
      return state;
  }
};

export default flights;
