import gql from 'graphql-tag';

export const USER_LOGIN = gql`
  mutation userLogin($username: String!, $password: String!) {
    result: userLogin(username: $username, password: $password) {
      __typename
      status
      message
      token
      userInfo {
        _id
        nickname
        avatarUrl
      }
    }
  }
`;

export const USERINFO = gql`
  query userInfo {
    userInfo: userInfo {
      __typename
      _id
      nickname
      avatarUrl
      sign
      sex
      birthday
      email
      unverified_email
      countryCode
      purePhoneNumber
      phoneNumber

      follow
      fans
      dynamic
    }
  }
`;

export const USERINFO_BY_ID = gql`
  query userInfoById($_id: String!) {
    userInfo: userInfoById(_id: $_id) {
      __typename
      _id
      nickname
      avatarUrl
      sign
      sex
      birthday
      email
      unverified_email
      countryCode
      purePhoneNumber
      phoneNumber

      followStatus
      follow
      fans
      dynamic
    }
  }
`;

export const USERINFOWITHOAUTH = gql`
  query userInfo {
    userInfo: userInfo {
      __typename
      _id
      nickname
      avatarUrl
      oauths {
        from
        userInfo
      }
    }
  }
`;


export const UPDATE_USERINFO = gql`
  mutation updateUserInfo($input: UpdateUserInfoInput) {
    result: updateUserInfo(input: $input) {
      __typename
      status
      message
    }
  }
`;

export const UPDATE_USER_EMAIL = gql`
  mutation updateUserEmail($email: String!) {
    result: updateUserEmail(email: $email) {
      __typename
      status
      message
    }
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation updateUserPassword($input: UpdateUserPasswordInput) {
    result: updateUserPassword(input: $input) {
      __typename
      status
      message
    }
  }
`;

export const UPDATE_USER_PHONE = gql`
  mutation updateUserPhonenumber($purePhoneNumber: String!, $countryCode: String!, $code: String!) {
    result: updateUserPhonenumber(purePhoneNumber: $purePhoneNumber, countryCode: $countryCode, code: $code) {
      __typename
      status
      message
    }
  }
`;

export const USER_PHONENUMBER_CODE = gql`
  mutation getPhoneNumberCode($purePhoneNumber: String!, $countryCode: String!) {
    result: getPhoneNumberCode(purePhoneNumber: $purePhoneNumber, countryCode: $countryCode) {
      __typename
      status
      message
    }
  }
`;

export const USER_REGISTER = gql`
  mutation userRegister($input: UserRegisterInput) {
    result: userRegister(input: $input) {
      __typename
      status
      message
      token
      userInfo {
        _id
        nickname
        avatarUrl
      }
    }
  }
`;

export const USER_LOGIN_BY_PHONENUMBER_CODE = gql`
  mutation userLoginByPhonenumberCode($purePhoneNumber: String!, $countryCode: String!, $code: String!) {
    result: userLoginByPhonenumberCode(purePhoneNumber: $purePhoneNumber, countryCode: $countryCode, code: $code) {
      __typename
      status
      message
      token
      userInfo {
        _id
        nickname
        avatarUrl
      }
    }
  }
`;
