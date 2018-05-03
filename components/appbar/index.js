import React, { PureComponent } from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import { CircularProgress } from 'material-ui/Progress';
import Hidden from 'material-ui/Hidden';
import IconButton from 'material-ui/IconButton';
import Headroom from 'react-headroom';
import Search from './search';
import Tabs from './tabs';
// import UserAvatar from './user';

const UserWithNoSSR = dynamic(import('./user'), {
  ssr: false,
  loading: () => <CircularProgress size={32} color="inherit" />,
});

const styles = theme => ({
  root: {
    height: 64,
    width: '100%',
    marginBottom: theme.spacing.unit * 3,
  },
  container: theme.container,
  toolbar: {
    padding: 0,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 0,
    '&>img': {
      width: 'auto',
    },
  },
  flex: {
    flex: 1,
  },
  logoButton: {
    marginRight: 20,
  },
  nav: {
    fontSize: 16,
    height: 64,
  },
});


@withStyles(styles)
export default class MyAppBar2 extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  render() {
    console.log('this.props');
    console.log(this.props);
    const { classes = {} } = this.props;
    // console.log(this.props);
    return (
      <Headroom
        className={classes.root}
        // onUnpin={() => {
        // }}
        // onUnfix={() => {
        // }}
      >
        <AppBar position="static">
          <div className={classes.container}>
            <Toolbar className={classes.toolbar}>
              <Link href="/">
                <IconButton className={classes.logoButton} color="inherit" aria-label="Menu">
                  <Avatar className={classes.logo} src="/static/logo.svg" />
                </IconButton>
              </Link>
              <Hidden className={`${classes.flex}`} implementation="css" only={['sm', 'xs']}>
                <Tabs />
              </Hidden>
              <UserWithNoSSR />
            </Toolbar>
          </div>
        </AppBar>
      </Headroom>
    );
  }
}
