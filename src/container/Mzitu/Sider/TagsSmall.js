import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@/components/Link';
import { MZITU_TAGS } from '@/graphql/schema/mzitu';
import { useQuery } from '@/hooks/graphql';
import Loading from '@/components/Loading';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '100%',
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.03)',
  },
  content: {
    textAlign: 'center',
    '&:last-child': {
      paddingBottom: 8,
    },
  },
  progress: {
    margin: `${theme.spacing(2)}px auto`,
    display: 'block',
    maxWidth: '36px',
    maxHeight: '36px',
  },
  name: {
    marginTop: 4,
    fontSize: 10,
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
}));


function MzituTags() {
  const classes = useStyles();
  const { data, error, loading, refetch } = useQuery(MZITU_TAGS);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div>
        {`Error! ${error.message}`}
        <Button onClick={refetch}>refetch</Button>
      </div>
    );
  }

  const { list = [] } = data;

  return (
    <Grid container spacing={2}>
      {
        list.map((i) => (
          <Grid item xs={4} key={i.tag}>
            <Link href={`/mzitu?tag=${i.tag}`}>
              <>
                <CardMedia className={classes.media} image={i.cover} title={i.title} />
                <Typography className={classes.name} color="textSecondary" component="p">
                  {i.title}
                </Typography>
              </>
            </Link>
          </Grid>
        ))
      }
    </Grid>
  );
}

export default MzituTags;
