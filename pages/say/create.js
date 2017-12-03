import React, { PureComponent } from 'react';
import { reduxMainPage } from '../../store';
import Create from '../../routes/say/create';

class Index extends PureComponent {
  render() {
    return (
      <div>
        <Create />
      </div>
    );
  }
}

export default reduxMainPage(Index);

