import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  html: {
    // border: '1px red solid',
    fontSize: 16,
    '& img': {
      maxWidth: '100%',
      margin: 'auto',
    },
    '& a': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },
    '& figure': {
      margin: 0,
    },
    '& iframe': {
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        maxWidth: '100%',
        height: 'auto',
      },
    },
    '& figure img': {
      margin: 'auto',
      width: '100%',
      maxWidth: '100%',
      display: 'block',
      marginTop: '1em',
      marginBottom: '1em',
      backgroundColor: 'rgba(0,0,0,0.05)',
    },
    '& figure a': {
      display: 'block',
      paddingBottom: '0 !important',
    },

    // '& a': {
    //   margin: 0,
    //   display: 'block',
    // },
  },
});

export default withStyles(styles)(({ html, classes }) => (
  <Typography component="div" className={classes.html}>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Typography>
));
