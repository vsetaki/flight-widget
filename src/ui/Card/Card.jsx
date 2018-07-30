import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    padding: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

const Card = ({ children, classes }) => (
  <Paper className={classes.card}>
    {children}
  </Paper>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Card);
