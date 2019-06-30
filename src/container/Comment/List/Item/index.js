import React, { useState, Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { getTimeAgo } from '@/utils/common';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import { DELETE_COMMENT } from '@/graphql/schema/comment';
import { useMutation } from '@/hooks/graphql';
import Create from '../../Create/Reply';
import useStyles from './styles';

function Comment({ commentTo, session, data: { _id, user = {}, content, createdAt, replyTo, replyCount } }) {
  const classes = useStyles();
  const [ isShow, setShow ] = useState(false);
  const deleteComment = useMutation(DELETE_COMMENT, { _id });

  function toogleShow() {
    setShow(!isShow);
  }

  return (
    <Box display="flex" className={classes.root}>

      <Box mr={3}>
        <Avatar aria-label="Avatar" src={user.avatarUrl} className={classes.avatar}>
          {user.nickname}
        </Avatar>
      </Box>
      <Box flexGrow={1}>
        {
          // <pre>
          //   {JSON.stringify({ _id, commentTo, replyTo, session }, true, 2)}
          // </pre>
            }
        <Box display="flex">
          <Typography variant="h6" gutterBottom className={classes.name}>
            {user.nickname}
          </Typography>

        </Box>
        {replyTo && replyTo._id !== commentTo && replyTo.user && replyTo.user.nickname && (
        <Fragment>
          回复
          <Box p={0.25} display="inline" />
          <b>
            {replyTo.user.nickname}
          </b>
          <Box p={0.25} display="inline" />
            :
          <Box p={0.5} display="inline" />
        </Fragment>
        )}
        <Typography variant="body2" className={classes.content}>
          {content}
        </Typography>


        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">{getTimeAgo(createdAt)}</Typography>
          <Box color="#666">
            <IconButton
              aria-label="Delete"
              color="inherit"
              className={`${classes['delete-comment']} delete-comment`}
              onClick={() => {
                deleteComment();
              }}
            >
              <DeleteIcon fontSize="small" style={{ fontSize: 14 }} />
            </IconButton>
            <Box px={1} display="inline" />
            <IconButton aria-label="Delete" color="inherit" onClick={toogleShow}>
              <ModeCommentIcon fontSize="small" style={{ fontSize: 14 }} />
            </IconButton>
            {replyCount || null}
            <Box px={1} display="inline" />
            <IconButton aria-label="Delete" color="inherit">
              <ThumbUpIcon fontSize="small" style={{ fontSize: 14 }} />
            </IconButton>
            {15}
          </Box>
        </Box>

        {isShow && (
          <Create
            session={session}
            commentTo={commentTo}
            replyTo={_id} // 外部指定commentId，说明是回复
            callback={toogleShow}
            autoFocus
          />
        )}
      </Box>
    </Box>
  );
}

export default Comment;
