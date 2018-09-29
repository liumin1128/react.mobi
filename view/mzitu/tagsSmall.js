import React, { Fragment, PureComponent } from 'react';
import { Query } from 'react-apollo';
import Link from '@/components/Link';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { MZITU_TAGS } from '@/graphql/schema/mzitu';
import nossr from '@/hoc/nossr';

const styles = {
  media: {
    height: 0,
    paddingTop: '100%',
  },
  content: {
    textAlign: 'center',
    '&:last-child': {
      paddingBottom: 8,
    },
  },
};

@nossr
@withStyles(styles)
export default class MeizituDetail extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Query
        query={MZITU_TAGS}
      >
        {({ loading, error, data = {} }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          const { list = [] } = data;

          if (list.length === 0) return 'Loading...';

          const randomIdx = Math.floor((list.length - 18) * Math.random());
          const result = list.slice(randomIdx, randomIdx + 18);

          return (
            <div>
              <Grid container spacing={16}>
                {
                  result
                    .map(i => (<Grid
                      item
                      xs={4}
                      key={i.tag}
                    >
                      <Link to={`/mzitu?tag=${i.tag}`}>
                        <Fragment>
                          <CardMedia
                            className={classes.media}
                            image={i.cover}
                            title={i.title}
                          />
                          <Typography style={{ marginTop: 4 }} color="textSecondary" component="p">
                            {i.title}
                          </Typography>
                        </Fragment>
                      </Link>
                    </Grid>
                    ))
                  }
              </Grid>
            </div>
          );
        }}
      </Query>);
  }
}