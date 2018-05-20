import React, { PureComponent, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Layout from '@/components/layout';
import Create from '@/view/article/create';

export default class Says extends PureComponent {
  render() {
    return (
      <Fragment>
        <Layout>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={12} md={12}>
              <Create />
            </Grid>
          </Grid>
        </Layout>
      </Fragment>
    );
  }
}
