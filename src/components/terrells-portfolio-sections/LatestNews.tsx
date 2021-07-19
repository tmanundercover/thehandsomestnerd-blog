import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid, Typography} from "@material-ui/core";
import theme from "../../common/Theme";
import Moment from "react-moment";
import sanityClient from "../../sanityClient";
import {urlFor} from '../abReplica/static-pages/cmsStaticPagesClient'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100vw',
    backgroundColor: 'whitesmoke',
    padding: theme.spacing(12, 20)
  },
  project: {
    width: '265px',
    height: '198px',
    borderRadius: '6px',
    padding: '32px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0,0,0,.1)'
  },
  projectsContainer: {
    // marginBottom: "70px"
  },
  author: {
    textTransform: 'capitalize'
  },
  title: {
    fontSize: "18px",
    fontWeight: 600
  },
  header: {
    fontWeight: 800,
    letterSpacing: '10px',
    lineHeight: 1.4,
    fontSize: '30px',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(5)
  },
  headerAccent: {
    display: 'inline-block',
    marginLeft: "8px"
  },
}))

export type LatestNewsSectionProps = {}

export type SanityLatestNewsStory ={
  articleTitle?: string,
  date?: Date,
  author?: string,
  coverImage?: any
}

const LatestNewsSection: FunctionComponent<LatestNewsSectionProps> = (props) => {
  const classes = useStyles(theme)

  const [newsStories, setNewsStories] = React.useState<SanityLatestNewsStory[]>([])

  React.useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "latestNews"]{
          title,
          slug,
          articleTitle,
          date,
          author,
          coverImage
          }`
      )
      .then((data: SanityLatestNewsStory[]) => {
        console.log(data)
        setNewsStories(data)
      })
      .catch(console.error)
  }, [])

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid container item>
        <Typography variant="h3" className={classes.header}>
          Latest
          <Typography component="span" variant="h3" className={`${classes.header} ${classes.headerAccent}`} color="primary">
            News
          </Typography>
        </Typography>
      </Grid>
      <Grid container item spacing={4} className={classes.projectsContainer}>
        {
          newsStories?.map((project, projectIndex) => (
            <Grid container key={projectIndex} direction="column" item xs={4}>
              <Grid container
                    item
                    className={classes.project}
                    style={{
                      backgroundImage: `url("${urlFor(project.coverImage).url()}")`,
                    }}>
              </Grid>
                <Grid container item>
                  <Typography className={classes.title}>{project.articleTitle}</Typography>
                </Grid>
                <Grid container item>
                  <Typography className={classes.author}>
                    By {project.author}
                  </Typography>
                  <Typography>/ </Typography>
                  <Moment format="MMM DD, YYYY">{project.date}</Moment>
                </Grid>
            </Grid>
          ))
        }
      </Grid>
    </Grid>
  )
}

export default LatestNewsSection