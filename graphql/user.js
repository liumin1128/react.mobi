import gql from 'graphql-tag';

export const USER_LOGIN = gql`
  mutation userLogin($username: String!, $password: String) {
    userLogin(username: $username, password: $password) {
      status
      message
      userInfo {
        _id
        nickname
        avatarUrl
      }
    }
  }
`;
