import React, { useState, useEffect } from 'react'
import throttle from 'lodash/throttle'
import Box from '@material-ui/core/Box'
import Fab from '@material-ui/core/Fab'
import Grow from '@material-ui/core/Grow'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { scrollToTopEaseing, getScrollTop } from '@/utils/common'
import useStyles from './styles'

export default function BackToTop() {
  const classes = useStyles()

  const [visible, setVisible] = useState(getScrollTop() > 300)

  function updateVisible() {
    return throttle(
      () => {
        setVisible(getScrollTop() > 300)
      },
      300,
      { leading: true }
    )()
  }

  useEffect(() => {
    window.addEventListener('scroll', updateVisible)
    return function cleanup() {
      window.removeEventListener('scroll', updateVisible)
    }
  })

  return (
    <Box className={classes.root}>
      <Grow in={visible}>
        <Fab
          size='small'
          color='inherit'
          aria-label='add'
          className={classes.fab}
          onClick={() => {
            scrollToTopEaseing()
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Grow>
    </Box>
  )
}
