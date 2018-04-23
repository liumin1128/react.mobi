import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import Link from 'next/link';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { MZITU_TAGS } from '../../graphql/mzitu';

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '100%',
  },
  content: {
    padding: 8,
    textAlign: 'center',
    '&:last-child': {
      paddingBottom: 8,
    },
  },
});

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

        return (
          <div>
            <Grid container spacing={24}>
              {
                list.map(i => (<Grid
                  item
                  xs={4}
                  sm={3}
                  md={2}
                >
                  <Link href={`/mzitu?tag=${i.tag}`}>
                    <a>
                      <Card>
                        <CardMedia
                          className={classes.media}
                          image={i.cover}
                          title={i.title}
                        />
                        <CardContent className={classes.content}>
                          <Typography component="p">
                            {i.title}
                          </Typography>
                        </CardContent>
                      </Card>
                    </a>
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
