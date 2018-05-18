import React, { PureComponent } from 'react';
import Dialog from ’@material-ui/coreDialog';
import Slide from ’@material-ui/coretransitions/Slide';
import styleRoot from '../hoc/styleRoot';
import reduxRoot from '../hoc/reduxRoot';
import { domRender } from '../utils/react';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default function (WrappedComponent) {
  @domRender
  @reduxRoot
  @styleRoot
  class Modal extends PureComponent {
    state = {
      open: true,
    };
    handleClose = () => {
      this.setState({ open: false });
    };
    render() {
      const { destory } = this.props;
      return (
        <div>
          <Dialog
            open={this.state.open}
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
