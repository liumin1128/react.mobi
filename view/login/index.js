import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'next/router';
import { USER_LOGIN } from '@/graphql/schema/user';
import { USER_TOKEN } from '@/config/base';
import { setStorage } from '@/utils/store';
import Form from './form';

@withRouter
@graphql(USER_LOGIN)
export default class Login extends PureComponent {
  onSubmit = async () => {
    const { mutate, router } = this.props;
    const { data: { result: data } } = await mutate({ variables: values });
    // console.log('data');
    // console.log(data);
    if (data.status === 200) {
      await setStorage(USER_TOKEN, data.token);
      await router.push('/');
    }
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} />
    );
  }
}
