import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'next/router';
import gql from 'graphql-tag';
import { SAY_LIST } from '@/graphql/say';

function Submit({ createSay, router }) {
  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const form = event.target;
      const formData = new window.FormData(form);
      const content = formData.get('content');
      await createSay({ content });
      form.reset();
      router.push('/');
    } catch (error) {
      console.log('error');
      console.log(error);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Submit</h1>
      <input placeholder="content" name="content" type="text" required />
      <button type="submit">Submit</button>
    </form>
  );
}

const createSay = gql`
  mutation ($input: SayInput) {
    item: createSay(input: $input) {
      _id
      content
      createdAt
    }
  }
`;

export default withRouter(graphql(createSay, {
  props: ({ mutate }) => ({
    createSay: ({ content }) => mutate({
      variables: { input: { content } },
      refetchQueries: ['SayList'],
      // update: (proxy, { data: { item } }) => {
      //   console.log('proxy');
      //   console.log(proxy);
      //   const data = proxy.readQuery({
      //     query: SAY_LIST,
      //     variables: {
      //       skip: 0,
      //       first: 5,
      //     },
      //   });
      //   console.log('data');
      //   console.log(data);
      //   proxy.writeQuery({
      //     query: SAY_LIST,
      //     data: {
      //       ...data,
      //       list: [item, ...data.list],
      //     },
      //     variables: {
      //       skip: 0,
      //       first: 5,
      //     },
      //   });
      // },
    }),
  }),
})(Submit));
