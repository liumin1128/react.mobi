import React, { PureComponent } from 'react';
import Affix from '@/components/Affix';
import Edite from './edite';

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <Affix offsetTop={80}>
          <Edite />
        </Affix>
      </div>
    );
  }
}