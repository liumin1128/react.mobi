import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  root: {
    position: 'fixed',
    right: 48,
    bottom: 48,
    zIndex: 9,
  },
  fab: {
    background: '#fff',
    boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.1)',
    color: '#999',
  },
}))
