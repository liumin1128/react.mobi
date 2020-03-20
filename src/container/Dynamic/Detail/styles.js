import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  avatar: {
    width: 48,
    height: 48,
  },
  header: {
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2),
    },
  },
  html: {
    position: 'relative',
    color: '#666',
    cursor: 'pointer',
    '& .emoji': {
      // width: '1.5em',
      // height: '1.5em',
      'vertical-align': '-0.5em',
      width: '5em',
      height: '5em',
    },
    '& a': {
      color: '#fd4c86',
      textDecoration: 'none',
    },
  },

  MenuItem: {
    minWidth: 100,
  },
}));
