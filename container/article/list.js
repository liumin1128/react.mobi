import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import Waypoint from 'react-waypoint';
import Item from './item';
import Loading from '../../components/loading-button';
import { getScrollTop } from '../../utils/common';

@connect(({ article = {}, loading, scrollTop }) => ({
  list: article.list,
  isEnd: article.isEnd,
  moreLoading: loading['article/more'],
  scrollTop,
}))
export default class extends PureComponent {
  state = {
    page: 1,
  }
  componentDidMount() {
    const { dispatch, scrollTop = {} } = this.props;
    const { router } = Router;
    const height = scrollTop[router.pathname];
    window.scrollTo(0, height);
    Router.onRouteChangeStart = () => {
      dispatch({
        type: 'scrollTop/save',
        payload: { [router.pathname]: getScrollTop() },
      });
    };
  }
  more = () => {
    const {
      dispatch, list = [], moreLoading, isEnd,
    } = this.props;
    if (!moreLoading && !isEnd) {
      const page = parseInt(list.length / 10, 0) + 1;
      this.setState({ page });
      dispatch({
        type: 'article/more',
        payload: { page },
      });
    }
  }
  render() {
    const { list = [], moreLoading, isEnd } = this.props;
    const { page } = this.state;
    return (<div>

      {list.length !== 0 ? list.map(i => (
        <Item key={i._id} {...i} />
      )) : <Loading
        loading={moreLoading}
        isEnd={isEnd}
      />}
      {list.length !== 0 &&
      <Waypoint
        key={page}
        onEnter={this.more}
      >
        <div>
          <Loading
            loading={moreLoading}
            isEnd={isEnd}
          />
        </div>
      </Waypoint>}
    </div>);
  }
}
