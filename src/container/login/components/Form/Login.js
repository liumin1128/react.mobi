import React, { PureComponent } from 'react';
import { Form, Field } from 'react-final-form';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@/components/Form/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

const registerValidate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = '用户名不能为空';
  }
  if (!values.password) {
    errors.password = '密码不能为空';
  }
  console.log(errors);
  return errors;
};

const styles = (theme) => {
  return {
    item: {
      marginBottom: theme.spacing(3),
    },
    button: {
      height: 48,
      borderRadius: 6,
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
    },
  };
};

@withStyles(styles)
export default class LoginForm extends PureComponent {
  render() {
    const { onSubmit, loading, classes } = this.props;

    return (
      <Form
        onSubmit={onSubmit}
        validate={registerValidate}
        render={({ handleSubmit, values, valid, dirty, ...other }) => {
          // console.log('other');
          // console.log(other);
          return (
            <form id="createArticleForm" onSubmit={handleSubmit}>

              <Field
                key="username"
                name="username"
                label="用户名"
                placeholder="请输入手机号或邮箱"
                className={classes.item}
                component={TextField}
                type="text"
                // autoComplete="new-password"
                fullWidth
              />

              <Field
                key="password"
                name="password"
                label="密码"
                // placeholder="保证不偷看"
                className={classes.item}
                component={TextField}
                type="password"
                autoComplete="new-password"
                fullWidth
              />

              <Button
                variant="contained"
                size="large"
                color="primary"
                type="submit"
                className={classes.button}
                // disabled={!dirty && !valid}
                fullWidth
              >
                {loading && <CircularProgress style={{ marginRight: 8 }} color="inherit" size={14} thickness={5} />}
                登录
              </Button>
            </form>
          );
        }}
      />
    );
  }
}
