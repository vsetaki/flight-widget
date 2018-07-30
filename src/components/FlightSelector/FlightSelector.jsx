import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '../../ui/Card';
import { DEFAULT_CARRIER } from '../../constants';

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

const styles = {
  label: {
    display: 'flex',
    alignItems: 'center',
  },
};

const FlightSelector = ({
  value, handleChange, items, classes,
}) => (
  <Card>
    <Grid container spacing={16}>
      <Grid item xs={4} className={classes.label}>
        <Typography variant="subheading">
          Авиакомпания:
        </Typography>
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
  </Card>
);

FlightSelector.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.string),
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

FlightSelector.defaultProps = {
  value: '',
  handleChange: () => { },
  items: null,
};

export default withStyles(styles)(FlightSelector);
