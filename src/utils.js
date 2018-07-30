import dayjs from 'dayjs';
import { CARRIER_COLORS } from './constants';

/**
 * Возвращает дату из ISO строки
 * @param {string} dateString
 * @returns {string}
 */
export const getDate = dateString => dayjs(dateString).format('DD.MM.YYYY');

/**
 * Возвращает время из ISO строки
 * @param {string} dateString
 * @returns {string}
 */
export const getTime = dateString => dayjs(dateString).format('HH:mm');

/**
 * Возвращает цвет авиакомпании
 * @param {string} name
 * @returns {string} HEX
 */
export const getCarrierColor = name => CARRIER_COLORS[name];
// в идеале надо регуляркой выбирать цвет
