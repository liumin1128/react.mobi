import { compose } from 'recompose';
import withRedux from './store';
import withApollo from './lib/apolloRoot';
import withStyle from './material-ui/withRoot';

export default compose(
  withRedux,
  withApollo,
  withStyle,
);
