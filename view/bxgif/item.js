import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    cursor: 'pointer',
    margin: 0,
    padding: 0,
    // boxShadow: 'none',
  },
  cover: {
    width: '100%',
    // minHeight: 100,
    height: 0,
    display: 'block',
  },
  title: {
    color: '#666',
  },
  meta: {
    marginTop: 4,
    display: 'flex',
    justifyContent: 'space-between',
    color: '#999',
    fontSize: 12,
  },
  content: {
    padding: 16,
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const {
      classes,
      title,
      cover,
      createdAt,
      total,
      height,
      _id,
    } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <Link key={_id} href={`/bxgif/detail?id=${_id}`}>
            <div>
              <CardMedia
                className={classes.cover}
                image={cover}
                title={title}
                style={{
                  paddingBottom: `${(height / 195) * 100}%`,
                  background: 'src',
                }}
              />
              <div className={classes.content}>
                <Typography
                  className={classes.title}
                  variant="subheading"
                  component="p"
                >
                  {title.substring(15, title.length)}
                </Typography>

                <Typography className={classes.meta} color="textSecondary">
                  <span>{`${total}`}</span>
                  <span>{createdAt}</span>
                </Typography>
              </div>
            </div>
          </Link>
        </Card>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
