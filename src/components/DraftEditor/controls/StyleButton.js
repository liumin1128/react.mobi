import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  button: {
    minHeight: 'auto',
    minWidth: 'auto',
    padding: 8,
  },
  unactive: {
    color: '#ccc',
  },
  icon: {
    fontSize: 20,
  },
});

@withStyles(styles)
export default class StyleButton extends Component {
  onToggle = (e) => {
    e.preventDefault();
    const { onToggle, style } = this.props;
    onToggle(style);
  };

  render() {
    const { icon: Icon, label, active, classes } = this.props;
    return (
      <Button
        color={active ? 'primary' : 'default'}
        aria-label={label}
        onMouseDown={this.onToggle}
        className={classes.button}
        // mini
      >
        {Icon ? <Icon className={`${classes.icon} ${active ? '' : classes.unactive}`} /> : label}
      </Button>
    );
  }
}