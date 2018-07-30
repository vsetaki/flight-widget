import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  progress: {
    margin: `${theme.spacing.unit}px auto`,
    textAlign: 'center',
  },
});

const Progress = ({ classes }) => (
  <div className={classes.progress}>
    <CircularProgress />
  </div>
);

Progress.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Progress);
