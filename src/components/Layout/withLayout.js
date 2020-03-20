import React, { Fragment, PureComponent } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Header from '@/components/Layout/Header';

export default (WrappedComponent) => class extends PureComponent {
  render() {
    /* eslint-disable no-param-reassign */
    if (typeof WrappedComponent.Layout === 'undefined') WrappedComponent.Layout = Fragment;
    if (typeof WrappedComponent.Header === 'undefined') WrappedComponent.Header = Header;
    if (typeof WrappedComponent.Footer === 'undefined') WrappedComponent.Footer = Fragment;
    if (typeof WrappedComponent.maxWidth === 'undefined') WrappedComponent.maxWidth = 'md';

    if (!WrappedComponent.Sider) {
      return <WrappedComponent {...this.props} />;
    }

    return (
      <Container maxWidth="md">
        <WrappedComponent.Header />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8}>
            <WrappedComponent {...this.props} />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Hidden implementation="css" only={[ 'sm', 'xs' ]}>
              <WrappedComponent.Sider />
            </Hidden>
          </Grid>
        </Grid>

      </Container>
    );
  }
};
