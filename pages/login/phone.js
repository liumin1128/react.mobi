import React, { PureComponent, Fragment } from 'react';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import CardContent from '@material-ui/core/CardContent';
import Login from '@/view/login/phone';
import AppBar from '@/components/Layout/Header/SimpleAppbar';

const styles = theme => ({
  card: {
    maxWidth: 360,
    margin: 16,
    boxShadow: 'none',
  },
  media: {
    height: 0,
    paddingTop: '60%',
  },
  help: {
    // background: 'red',
    paddingTop: 0,
    fontSize: 12,
    color: '#666',
    display: 'flex',
    justifyContent: 'space-between',
    '&  a': {
      color: '#666',
      textDecoration: 'none',
    },
  },
});

@withStyles(styles)
export default class LoginPage extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <AppBar title="手机验证码登录" />
        <Dialog
          hideBackdrop
          open
          // className={classes.card}
          classes={{
            paper: classes.card,
          }}
        >
          <CardContent>
            <Login />
          </CardContent>
          <CardContent className={classes.help}>
            <span>
              还没有账号？
              <Link href="/login/register">立即注册</Link>
            </span>
            <span>
              <Link href="/login">用户名密码登录</Link>
            </span>
          </CardContent>
        </Dialog>
      </Fragment>
    );
  }
}
