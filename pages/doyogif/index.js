import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@/view/doyogif/list';
import Layout from '@/components/layout';


export default class News extends PureComponent {
  render() {
    return (
      <Layout >
        <Grid container spacing={16}>
          <Grid item xs={12} sm={12} md={12}>
            <List />
          </Grid>
        </Grid>
      </Layout>
    );
  }
}