import React, { PureComponent, createRef, Fragment } from 'react';
// import Waypoint from 'react-waypoint';
import { withRouter } from 'next/router';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import StarIcon from '@material-ui/icons/Star';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import { formatTime, getScrollTop } from '@/utils/common';
import Menus from '@/components/Menus';
import Comments from '@/container/comments';
import Dialog from '@material-ui/core/Dialog';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
// import Hidden from '@material-ui/core/Hidden';
import withWidth, { isWidthUp, isWidthDown } from '@material-ui/core/withWidth';
import ShareMenu from '@/components/ShareMenu';
import Delete from './Delete';
import Like from './Like';
import Content from './Content';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  content: {
    cursor: 'pointer',
  },
  nickname: {
    fontSize: 14,
  },
  fixed: {
    position: 'fixed',
    bottom: 0,
    boxShadow: '0 0px 12px 0px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'box-shadow 1s ',
  },
  toolbar: {
    background: '#fff',
    height: 64,
    // border: '1px red solid',
    // minHeight: 64,
    // display: 'flex',
  },
  primaryBtn: {
    minWidth: 0,
    marginRight: 8,
  },
  btn: {
    minWidth: 0,
    color: '#666',
  },
});

@withWidth()
@withStyles(styles)
@withRouter
export default class ListItem extends PureComponent {
  state = {
    isFixed: false,
    toolbarWidth: 0,
    isExpanded: false,
    showComments: false,
  }

  content = createRef()

  componentDidMount() {
    if (this.content) {
      this.setState({
        toolbarWidth: this.content.offsetWidth,
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
  }

  toggleExpanded = (e) => {
    e.preventDefault();
    const { isExpanded } = this.state;
    this.setState({
      isExpanded: !isExpanded,
      showComments: false,
      isFixed: false,
    }, () => {
      // 如果环境允许，创建自定义事件，触发滚动，以调整所有卡片状态
      if (document.createEvent) {
        // 创建event的对象实例。
        const event = document.createEvent('HTMLEvents');
        // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为
        event.initEvent('scroll', true, false);
        // 触发自定义事件oneating
        document.dispatchEvent(event);
      }
    });
    if (!isExpanded) {
      window.addEventListener('scroll', this.onScroll);
      window.addEventListener('resize', this.onResize);
    } else {
      window.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('resize', this.onResize);
    }
  }

  toggleShowComments = () => {
    this.setState(state => ({
      showComments: !state.showComments,
    }));
  }

  onScroll = () => {
    const { isExpanded, isFixed } = this.state;
    if (!isExpanded || !this.content) return;

    const st = getScrollTop();
    const sh = document.documentElement.clientHeight;
    const ot = this.content.offsetTop;
    const oh = this.content.offsetHeight;
    // console.log(st, sh, ot, oh);

    if (st + sh < ot + oh && st + sh > ot + 200) {
      if (!isFixed) {
        this.setState({
          isFixed: true,
        });
      }
    } else if (isFixed) {
      this.setState({
        isFixed: false,
      });
    }
  }

  onResize = () => {
    const { isExpanded, isFixed } = this.state;
    if (!isExpanded || !this.content || !isFixed) return;
    // console.log('onResize');
    this.setState({
      toolbarWidth: this.content.offsetWidth,
    });
  }

  renderMenus = () => {
    const { _id, router } = this.props;
    return (
      <Menus
        options={[
          {
            key: 'delete',
            render: props => <Delete {...props} key={{ key: 'delete' }} id={_id} />,
          },
          {
            key: 'edite',
            render: props => (
              <MenuItem
                {...props}
                onClick={() => {
                  router.push(`/article/edite?_id=${_id}`);
                }}
              >
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText inset primary="编辑" />
              </MenuItem>
            ),
          },
        ]}
      />
    );
  }

  renderNickname = () => {
    const { classes, user } = this.props;
    return (
      <Typography variant="h6" className={classes.nickname}>{user.nickname}</Typography>
    );
  }

  renderAvatar = () => {
    const { classes, user } = this.props;
    return (
      <Avatar
        aria-label="Recipe"
        className={classes.avatar}
        src={user.avatarUrl}
        style={{ background: 'rgba(0,0,0,0.1)' }}
      >
        {user.nickname}
      </Avatar>
    );
  }

  renderToobar = () => {
    const { classes, commentCount, user = {}, title, html, likeCount, likeStatus, _id, width } = this.props;
    const { isExpanded, isFixed, toolbarWidth, showComments } = this.state;
    // console.log('width');
    // console.log(width);

    const fixedOptions = isFixed ? {
      className: classes.fixed,
      style: {
        width: toolbarWidth || '100%',
      },
    } : {};

    return (
      <div style={{ height: 64 }}>
        <div {...fixedOptions}>
          <Toolbar className={classes.toolbar}>
            <Like likeStatus={likeStatus} id={_id} className={classes.primaryBtn} count={likeCount} />
            <div className={classes.grow}>
              <Button onClick={this.toggleShowComments} className={classes.btn} size="small">
                <SpeakerNotesIcon style={{ width: 16, marginRight: 3, marginTop: 2 }} />
                {showComments ? '收起评论' : `${commentCount} 条评论`}
              </Button>

              {isWidthUp('sm', width) && (
                <Fragment>
                  <ShareMenu
                    title={title}
                    nickname={user.nickname}
                    description={`${html
                      .replace(/<[^>]+>/g, '')
                      .substring(0, 70)}......`}
                  >
                    <Button className={classes.btn} size="small">
                      <ShareIcon style={{ width: 13, marginRight: 3 }} />
                      分享
                    </Button>
                  </ShareMenu>
                  <Button className={classes.btn} size="small">
                    <StarIcon style={{ width: 16, marginRight: 3 }} />
                    收藏
                  </Button>
                  {
                    this.renderMenus()
                  }
                </Fragment>
              )}

            </div>

            {isWidthDown('xs', width) && (
              <Fragment>
                {
                  this.renderMenus()
                }
              </Fragment>
            )}

            {isExpanded && (
              <Button
                disableRipple
                disableTouchRipple
                size="small"
                color="primary"
                onClick={this.toggleExpanded}
              >
                  收起
                <KeyboardArrowUpIcon />
              </Button>
            )}

          </Toolbar>
        </div>
      </div>
    );
  }

  renderComments = () => {
    const { _id } = this.props;
    return (
      <CardContent>
        <Comments _id={_id} />
      </CardContent>
    );
  }

  renderCommentsModel = () => {
    const { _id } = this.props;
    return (
      <Dialog
        open
        fullWidth
        onClose={this.toggleShowComments}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Comments _id={_id} />
      </Dialog>
    );
  }

  render() {
    const { html, title, _id, createdAt } = this.props;
    const { isExpanded, showComments } = this.state;

    return (
      <div ref={(c) => { this.content = c; }}>
        <Card>
          <CardHeader
            avatar={this.renderAvatar()}
            // action={this.renderMenus()}
            title={this.renderNickname()}
            subheader={formatTime(createdAt, 'MM月DD日')}
          />
          <Content
            _id={_id}
            title={title}
            html={html}
            isExpanded={isExpanded}
            toggleExpanded={this.toggleExpanded}
          />
          {this.renderToobar()}
          {showComments && (isExpanded ? this.renderCommentsModel() : this.renderComments())}
        </Card>
      </div>
    );
  }
}
