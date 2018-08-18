import reducer from '../flights';
import { FETCH_FLIGHTS, FETCH_FLIGHTS_SUCCESS, FETCH_FLIGHTS_FAIL, CHANGE_CARRIER } from '../../actions/flights';

const initialState = {
  data: null,
  carrier: null,
};

describe('flights reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should handle FETCH_FLIGHTS', () => {
    expect(reducer(initialState, {
      type: FETCH_FLIGHTS,
    })).toEqual({
      ...initialState,
      fetching: true,
    });
  });

  it('should handle FETCH_FLIGHTS_SUCCESS', () => {
    expect(reducer(initialState, {
      type: FETCH_FLIGHTS_SUCCESS,
      payload: [],
    })).toEqual({
      ...initialState,
      data: [],
      fetching: false,
    });
  });

  it('should handle FETCH_FLIGHTS_FAIL', () => {
    expect(reducer(initialState, {
      type: FETCH_FLIGHTS_FAIL,
    })).toEqual({
      ...initialState,
      data: null,
      fetching: false,
    });
  });

  it('should handle CHANGE_CARRIER', () => {
    expect(reducer(initialState, {
      type: CHANGE_CARRIER,
      payload: 'Aeroflot'
    })).toEqual({
      ...initialState,
      carrier: 'Aeroflot',
    });
  });
});
