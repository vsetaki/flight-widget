import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FlightIcon from '@material-ui/icons/Flight';

const DEFAULT_CARRIER = 'Все авиакомпании';

const renderSelectItems = (items) => {
  const defaultItem = (
    <MenuItem key={0} value="">
      {DEFAULT_CARRIER}
    </MenuItem>
  );

  if (items && items.length) {
    const options = items ? items.map(item => (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    )) : undefined;

    return [defaultItem, ...options];
  }

  return [defaultItem];
};

const FlightSelector = ({ value, handleChange, items }) => (
  <Paper>
    <Grid container spacing={16}>
      <Grid item xs={4}>
        <FlightIcon />
        Авиакомпании
      </Grid>
      <Grid item xs={8}>
        <FormControl fullWidth>
          <Select
            value={value === null ? '' : value} // этот select принимает только ''
            onChange={handleChange}
            inputProps={{
              name: 'carrier',
              id: 'carrier-select',
            }}
            displayEmpty
          >
            {renderSelectItems(items)}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  </Paper>
);

FlightSelector.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.string),
};

FlightSelector.defaultProps = {
  value: '',
  handleChange: () => { },
  items: null,
};

export default FlightSelector;
