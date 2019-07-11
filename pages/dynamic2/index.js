import React, { PureComponent } from 'react';
import BaseLayout from '@/components/Layout/Base';
import List from '@/container/Dynamic/List';

export default class index extends PureComponent {
  render() {
    return (
      <BaseLayout>
        <List />
      </BaseLayout>
    );
  }
}