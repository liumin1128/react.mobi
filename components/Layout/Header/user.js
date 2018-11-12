import React, { PureComponent, Fragment } from 'react';
import Link from 'next/link';
import { Query, graphql } from 'react-apollo';
import dynamic from 'next/dynamic';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { clearStorage } from '@/utils/store';
import { USERINFO } from '@/graphql/schema/user';

const DynamicComponentWithCustomLoading = dynamic(() => import('@/view/login/modal'), {
  loading: () => null,
});


@graphql(USERINFO)
export default class user extends PureComponent {
  state = {
    showLoginModal: false,
    anchorEl: null,
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLgout = async () => {
    const { data: { refetch } } = this.props;

    this.handleClose();
    await clearStorage();
    await refetch();
    console.log('xx');
  }

  refetch = () => {}

  onLoginSuccess = () => {
    this.setState({ showLoginModal: false });
    this.refetch();
  }

  toogleModal = () => {
    this.setState(({ showLoginModal }) => ({ showLoginModal: !showLoginModal }));
  }

  renderLoginForm() {
    return (
      <DynamicComponentWithCustomLoading
        onLoginSuccess={this.onLoginSuccess}
        onClose={this.toogleModal}
      />
    );
  }

  renderUser() {
    const { data: { loading, error, userInfo = {}, refetch } } = this.props;
    if (loading) return null;
    if (error) {
      this.refetch = refetch;
      return (
        <Fragment>
          <Link href="/login/register"><Button color="inherit">注册</Button></Link>
          <Button
            color="inherit"
            style={{ background: 'rgba(255,255,255,0.1)' }}
            onClick={this.toogleModal}
          >
            登录
          </Button>
        </Fragment>
      );
    }
    const { anchorEl } = this.state;
    return (
      <Fragment>
        <ButtonBase
          centerRipple
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <Avatar src={userInfo.avatarUrl} />
        </ButtonBase>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleLgout}>Logout</MenuItem>
        </Menu>
      </Fragment>

    );
  }

  render() {
    console.log('this.props');
    console.log(this.props);
    const { showLoginModal } = this.state;
    return (
      <Fragment>
        {this.renderUser()}
        {showLoginModal && this.renderLoginForm()}
      </Fragment>
    );
  }
}
