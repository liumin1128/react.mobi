import React, { useState } from 'react';
import { CREATE_COMMENT, COMMENT_LIST } from '@/graphql/schema/comment';
import { useMutation } from '@/hooks/graphql';
import Form from './Form';

function CommentCreate({ commentTo, replyTo, session, callback }) {
  const [ status, setStatus ] = useState('default');
  const createComment = useMutation(CREATE_COMMENT, { commentTo, replyTo, session }, {});


  return (
    <Form
      onSubmit={(values, form) => {
        setStatus('loading');
        createComment(values, {
          update: (store, { data: { result: { status: code, data: result } } }) => {
            setStatus('default');
            if (callback) callback();
            if (code === 200) {
              if (form) form.reset();
              const data = store.readQuery({ query: COMMENT_LIST, variables: { session } });
              data.list.unshift(result);
              data.meta.count += 1;
              store.writeQuery({ query: COMMENT_LIST, variables: { session }, data });
            }
          },
        });
      }}
      status={status}
    />
  );
}

export default CommentCreate;