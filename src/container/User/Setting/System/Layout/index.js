import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';

const list = [
  { label: '修改密码', value: 'password' },
  { label: '绑定邮箱', value: 'email' },
  { label: '绑定手机号', value: 'phone' },
];

const useStyles = makeStyles((theme) => {
  return {
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    tab: {
      alignItems: 'flex-end',
      paddingRight: theme.spacing(2),
    },
    selected: {
      backgroundColor: theme.palette.primary.a100,
      color: theme.palette.primary.main
    },
  };
});

function SystemSettings({ children }) {
  const classes = useStyles();
  const [ value, setValue ] = useState('password');

  return (
    <Card>
      <Box display="flex">
        <Box width={240} minHeight={500} py={4} className={classes.tabs}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            indicatorColor="primary"
            value={value}
            aria-label="Vertical tabs example"
            onChange={(_, path) => {
              setValue(path);
            }}
          >
            {list.map(i => (
              <Tab
                key={i.value}
                label={i.label}
                value={i.value}
                id={`vertical-tab-${i.value}`}
                aria-controls={`vertical-tabpanel-${i.value}`}
                classes={{ wrapper: classes.tab, selected: classes.selected }}
              />
            ))}
          </Tabs>
        </Box>

        <Box width={1}>
          {children}
        </Box>
      </Box>
    </Card>

  );
}

export default SystemSettings;