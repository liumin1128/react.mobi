import React from 'react';
// import Link from 'next/link';
import Router from 'next/router';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useMutation } from '@/hooks/graphql';
import { USERINFO } from '@/graphql/schema/user';
import { useOnMount } from '@/hooks';
import Link from '@/components/Link';

import Skeleton from './Skeleton';

function EditeUserInfo() {
  const [ getUserInfo, getUserInfoData ] = useMutation(USERINFO);

  useOnMount(async () => {
    if (!getUserInfoData.called) {
      await getUserInfo();
    }
  });

  if (!getUserInfoData.called || getUserInfoData.loading) {
    return (
      <Skeleton />
    );
  }

  if (getUserInfoData.hasError) {
    return (
      <Card>
        <Box p={2} display="flex" justifyContent="center">
          <Link href="/login/register"><Button color="primary" variant="outlined">注册</Button></Link>
          <Box ml={1} />
          <Link href="/login"><Button color="primary" variant="contained">登录</Button></Link>
        </Box>
      </Card>
    );
  }

  const { userInfo } = getUserInfoData.data;

  return (
    <Card>
      <Box>
        <Box p={2} px={4} display="flex" justifyContent="center" alignItems="center">
          <Link
            href={`/user/profile?path=dynamic&user=${userInfo._id}`}
            as={`/user/profile/dynamic/${userInfo._id}`}
          >
            <Avatar
              src={userInfo.avatarUrl}
              style={{ border: '1px #fff solid', boxShadow: '1px 2px 3px rgba(0,0,0,0.2)', width: 64, height: 64 }}
            />
          </Link>

          <Box flex={1} ml={1}>
            <Link
              href={`/user/profile?path=dynamic&user=${userInfo._id}`}
              as={`/user/profile/dynamic/${userInfo._id}`}
            >
              <Typography style={{ fontSize: 14, fontWeight: 'bold', padding: 0 }}>{userInfo.nickname}</Typography>
            </Link>

            <Link
              href={`/user/profile?path=dynamic&user=${userInfo._id}`}
              as={`/user/profile/dynamic/${userInfo._id}`}
            >
              <Typography variant="caption">{userInfo.sign || '这是懒人~'}</Typography>
            </Link>
          </Box>
        </Box>

        <Divider />

        <Box p={2} py={1} display="flex" justifyContent="space-around" alignItems="center">
          <Link
            href={`/user/profile?path=dynamic&user=${userInfo._id}`}
            as={`/user/profile/dynamic/${userInfo._id}`}
          >
            <Box>
              <Typography align="center" style={{ fontSize: 10, color: '#789', fontWeight: 300 }}>动态</Typography>
              <Typography align="center" style={{ fontSize: 18, color: '#666', fontWeight: 500 }}>{userInfo.dynamic}</Typography>
            </Box>
          </Link>

          <Divider orientation="vertical" style={{ height: 24 }} />

          <Link
            href={`/user/profile?path=follow&user=${userInfo._id}`}
            as={`/user/profile/follow/${userInfo._id}`}
          >
            <Box>
              <Typography align="center" style={{ fontSize: 10, color: '#789', fontWeight: 300 }}>关注</Typography>
              <Typography align="center" style={{ fontSize: 18, color: '#666', fontWeight: 500 }}>{userInfo.follow}</Typography>
            </Box>
          </Link>

          <Divider orientation="vertical" style={{ height: 24 }} />

          <Link
            href={`/user/profile?path=fans&user=${userInfo._id}`}
            as={`/user/profile/fans/${userInfo._id}`}
          >
            <Box>
              <Typography align="center" style={{ fontSize: 10, color: '#789', fontWeight: 300 }}>粉丝</Typography>
              <Typography align="center" style={{ fontSize: 18, color: '#666', fontWeight: 500 }}>{userInfo.fans}</Typography>
            </Box>
          </Link>

        </Box>
      </Box>
    </Card>
  );
}

export default EditeUserInfo;
