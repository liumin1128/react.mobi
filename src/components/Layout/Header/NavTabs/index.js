import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Router, { useRouter, withRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { useOnMount, useOnUnmount } from '@/hooks';

const useStyles = makeStyles(theme => ({
  tab: {
    height: 64,
    minWidth: 80,
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      minWidth: 70,
      height: 56,
    },
  },
  indicator: {
    backgroundColor: '#ffffff',
  },
}));

function SimpleTabs({ navList = [], router }) {
  const classes = useStyles();

  const [ value, setValue ] = useState(router.pathname);

  useOnMount(() => {
    Router.events.on('routeChangeStart', onRouteChange);
  });

  useOnUnmount(() => {
    Router.events.off('routeChangeStart', onRouteChange);
  });

  function onRouteChange(pathname) {
    if (navList.findIndex(i => i.pathname === pathname) !== -1) {
      setValue(pathname);
    }
  }

  function handleChange(event, pathname) {
    setValue(pathname);
    router.push(pathname);
  }

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      classes={{
        indicator: classes.indicator,
      }}
    >
      {navList.map(i => (
        <Tab
          key={i.key || i.label}
          label={i.label}
          value={i.pathname}
          classes={{
            root: classes.tab,
          }}
        />
      ))}
    </Tabs>
  );
}

SimpleTabs.propTypes = {
  navList: PropTypes.array.isRequired,
};

export default withRouter(SimpleTabs);
