import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@/components/Link';

const styles = (theme) => ({
  button: {
    textTransform: 'capitalize',
    height: 48,
    marginBottom: 20,
    position: 'relative',
    borderRadius: 6,
    // background: theme.palette.text.primary,
    boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
  },
  icon: {
    position: 'absolute',
    left: 16,
    top: 10,
    width: 24,
    height: 24,
  },
});

@withStyles(styles)
export default class OauthButton extends PureComponent {
  render() {
    const { text = 'Button', color = '#333', icon, url, classes } = this.props;

    console.log('color');
    console.log(color);
    return (
      <Link href={url} prefetch={false}>
        <Button
          variant="outlined"
          size="large"
          fullWidth
          style={{ borderColor: color, color }}
          className={classes.button}
        >
          <img className={classes.icon} alt={text} src={icon} />
          {text}
        </Button>
      </Link>
    );
  }
}
