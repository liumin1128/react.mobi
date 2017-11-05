import React, { PureComponent } from 'react';
import Login from '../components/login';
import Head from '../components/head';
import { reduxPage } from '../store';
import Toast from '../components/toast';

class Index extends PureComponent {
  // static async getInitialProps({ query, store }) {
  //   await store.dispatch({
  //     type: 'say/init',
  //     payload: query,
  //   });
  //   return query;
  // }
  render() {
    return (
      <div>
        <Head>
          <title>999</title>
          <meta name="description" content="注册" className="next-head" />
        </Head>
        <Login />
        <Toast />
        <style jsx>{`
          .h1 {
            color: red;
            font-size: 30px;
          }
        `}</style>
      </div>
    );
  }
}

export default reduxPage(Index);

