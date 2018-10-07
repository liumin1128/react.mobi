import React, { PureComponent } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import withStyle from './material-ui/withRoot';
// import reduxRoot from '@/hoc/reduxRoot';
import { domRender } from '@/utils/react';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default function (WrappedComponent) {
  @domRender
  // @reduxRoot
  @withStyle
  class Modal extends PureComponent {
    state = {
      open: true,
    };

    handleClose = () => {
      this.setState({ open: false });
    };

    render() {
      const { destory } = this.props;
      const { open } = this.state;

      return (
        <div>
          <Dialog
            open={open}
            keepMounted={false}
            transition={Transition}
            onClose={this.handleClose}
            onExited={() => { if (destory) destory(); }}
            aria-labelledby="form-dialog-title"
          >
            <WrappedComponent close={this.handleClose} />
          </Dialog>
        </div>
      );
    }
  }
  return Modal;
}
