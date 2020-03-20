import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import DeleteIcon from '@material-ui/icons/Delete';
import ModeCommentIcon from '@material-ui/icons/ModeCommentOutlined';
// import Badge from '@material-ui/core/Badge';
import { DELETE_COMMENT, COMMENT_LIST } from '@/graphql/schema/comment';
import { ZAN } from '@/graphql/schema/zan';
import { useMutation } from '@/hooks/graphql';
import Snackbar from '@/components/Snackbar';
import InfoButton from '@/components/Button/Info';
import Avatar from '@/components/Avatar';

import { getTimeAgo } from '@/utils/common';
import { text2html } from '@/container/Dynamic/utils';
import Create from '../../Create/Reply';
import useStyles from './styles';

function Comment({ commentTo, session, data: { _id, user = {}, content, createdAt, replyTo, replyCount, zanCount, zanStatus } }) {
  const classes = useStyles();
  const [ isShow, setShow ] = useState(false);
  // const deleteComment = useMutation(DELETE_COMMENT, { _id });
  const [ zan ] = useMutation(ZAN, { _id }, {
    optimisticResponse: { result: { status: zanStatus ? 201 : 200, message: '创建成功', __typename: 'Result' } },
    update: (store, { data: { result: { status: code, message } } }) => {
      if (code === 200 || code === 201) {
        const data = store.readQuery({ query: COMMENT_LIST, variables: { session } });
        const num = { 200: 1, 201: -1 };
        const sta = { 200: true, 201: false };
        if (replyTo) {
          // 如果是回复
          const idx = data.list.findIndex((i) => i._id === commentTo);
          const jdx = data.list[idx].replys.findIndex((j) => j._id === _id);
          data.list[idx].replys[jdx].zanCount += num[code];
          data.list[idx].replys[jdx].zanStatus = sta[code];
        } else {
          const idx = data.list.findIndex((i) => i._id === commentTo);
          data.list[idx].zanCount += num[code];
          data.list[idx].zanStatus = sta[code];
        }
        store.writeQuery({ query: COMMENT_LIST, variables: { session }, data });
      } else {
        Snackbar.error(message);
      }
    },
  });

  function toogleShow() {
    setShow(!isShow);
  }

  const html = text2html(content);

  // if (replyTo && replyTo._id !== commentTo && replyTo.user && replyTo.user.nickname) {
  //   html = `回复 <b>${replyTo.user.nickname}</b> ： ${html}`;
  // }

  return (
    <Box display="flex" className={classes.root}>

      <Box mr={2}>
        <Avatar
          size={48}
          nickname={user.nickname}
          avatarUrl={user.avatarUrl}
        />
      </Box>
      <Box flexGrow={1}>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" className={classes.name}>
            {user.nickname}
          </Typography>

          {
            (replyTo && replyTo._id !== commentTo && replyTo.user && replyTo.user.nickname) && (
              <>
                <Box px={1}>

                  <Typography variant="body2">回复</Typography>
                </Box>
                <Typography variant="h6" className={classes.name}>
                  {replyTo.user.nickname}
                </Typography>
              </>
            )
          }
        </Box>

        {/* 正文部分 */}
        <Box my={1}>
          <Typography variant="body1" component="div" className={classes.content}>
            <div className={classes.html} dangerouslySetInnerHTML={{ __html: html }} />
          </Typography>
        </Box>

        {/* 正文部分 */}


        <Box display="flex" alignItems="center" style={{ color: '#999' }}>
          <Typography variant="body2" color="inherit">{getTimeAgo(createdAt)}</Typography>
          {/* <IconButton
              aria-label="Delete"
              color="inherit"
              className={`${classes['delete-comment']} delete-comment`}
              onClick={() => {
                deleteComment();
              }}
            >
              <DeleteIcon fontSize="small" style={{ fontSize: 14 }} />
            </IconButton> */}
          <Box ml={4} />
          <InfoButton label={replyCount || null} icon={ModeCommentIcon} onClick={() => { toogleShow(); }} />
          <Box ml={4} />
          <InfoButton
            label={zanCount || null}
            icon={zanStatus ? ThumbUpIcon : ThumbUpOutlinedIcon}
            onClick={() => { zan(); }}
            className={zanStatus ? classes.primary : ''}
          />

        </Box>

        {isShow && (
          <Box mt={3}>
            <Create
              session={session}
              commentTo={commentTo}
              replyTo={_id} // 外部指定commentId，说明是回复
              callback={toogleShow}
              autoFocus
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Comment;
