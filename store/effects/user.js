import { toast } from 'react-toastify';
import { request, setStorage } from '../../utils';

class User {
  login = async ({ payload }, { getState, dispatch }) => {
    try {
      const {
        status, message, token, userInfo,
      } = await request('user/login', payload);
      if (status === 200) {
        toast.success(`${userInfo.nickname} 死鬼，你可回来了！`);
        await setStorage('token', token);
        await dispatch({ type: 'user/save', payload: userInfo });
        await dispatch({ type: 'common/save', payload: { loginModalVisible: false } });
      } else {
        toast.error(message);
      }
      // await dispatch({ type: 'user/init' });
    } catch (error) {
      console.log('登录错误');
      console.log(error);
      toast.error('用户名或密码错误');
    }
    // await Router.push('/');
  }
  register = async ({ payload }, { getState, dispatch }) => {
    try {
      const {
        status, message, token, userInfo,
      } = await request('user/register', payload);
      if (status === 200) {
        toast.success('注册成功');
        await setStorage('token', token);
        await dispatch({ type: 'user/save', payload: userInfo });
        await dispatch({ type: 'common/save', payload: { registerModalVisible: false } });
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.log('注册失败');
      console.log(error);
      toast.error(error.message);
    }
  }
}

export default new User({ name: 'user' });