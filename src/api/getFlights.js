/**
 * @typedef Flight
 * @type {Object}
 * @property {number} id
 * @property {string} arrival
 * @property {string} departure
 * @property {string} carrier
 */

/**
 * @typedef Flights
 * @type {Array<Flight>}
 */

/**
 * @typedef FlightsResponse
 * @type {Object}
 * @property {Flights} flight
 */

const url = '/data.json';

/**
 * Вытаскивает массив полетов из объекта
 * @param {FlightsResponse}
 * @returns {Flights}
 */
const prepareData = ({ flights }) => flights;

export default function getFlights() {
  return fetch(url)
    .then(response => response.json())
    .then(prepareData);
}
