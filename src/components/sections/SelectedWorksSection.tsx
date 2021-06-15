import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Fab, Grid, Modal, Typography} from '@material-ui/core'
import theme from '../../common/Theme'
import {urlFor} from './IntroSection'
import {SanityImageAssetDocument} from '@sanity/client'
import {Book} from '@material-ui/icons'
import sanityClient from '../../sanityClient'
import BlockContent from '@sanity/block-content-to-react'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100vw',
    backgroundColor: 'whitesmoke',
    padding: theme.spacing(12, 20),
  },
  project: {
    width: '340px',
    height: '340px',
    borderRadius: '6px',
    padding: '32px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0,0,0,.1)',
  },
  projectsContainer: {
    marginBottom: '70px',
  },
  tags: {
    color: 'rgba(0,0,0,.4)',
  },
  title: {
    fontSize: '18px',
    fontWeight: 600,
  },
  aboutMe: {
    fontWeight: 800,
    letterSpacing: '10px',
    lineHeight: 1.4,
    fontSize: '30px',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(5),
  },
  me: {
    display: 'inline-block',
    marginLeft: '8px',
  },
}))

const useModalStyles = makeStyles((theme: Theme) => ({
  paper: {
    position: 'absolute',
    width: '98%',
    height: '98%',
    backgroundColor: 'whitesmoke',
    border: '2px solid #000',
    top: '1%',
    left: '1%',
    padding: '16px 32px 24px',
  },
  modalHeadlineIcon: {
    fontSize: '73px',
  },
  modalChevron: {
    color: '#F04242',
    fontSize: '443px',
    marginLeft: '-168px',
    opacity: .1,
  },
}))

export type SelectedWorksSectionProps = {
  projects: any[]
}

export type SanityPortfolioType = {
  title: string,
  slug: string,
  name: string,
  body: string,
  subtitle: string,
  categories: any[],
  tag: string,
  source: string,
  coverImage: SanityImageAssetDocument
}

const SelectedWorksSection: FunctionComponent<SelectedWorksSectionProps> = (props) => {
  const classes = useStyles(theme)
  const styles = useModalStyles(theme)
  const [showImage, setShowImage] = React.useState<boolean[]>([])
  const [currentBlogPost, setCurrentBlogPost] = React.useState<SanityPortfolioType | undefined>(undefined)
  const [portfolioItems, setPortfolioItems] = React.useState<any | undefined>(undefined)

  React.useEffect(() => {
    if (props.projects.length > 0) {
      setShowImage(new Array(props.projects.length).fill(false))

      // fetch the projects from references
      sanityClient
        .fetch(
          `*[_type == 'portfolioItem']{
          title, 
          subtitle, 
          name, 
          tag, 
          source, 
          coverImage, 
          body, 
          categories[]->{title, description}
       }`
        )
        .then((data: any[]) => {
          console.log(data)
          setPortfolioItems(data)
        })
        .catch(console.error)
    }
  }, [props.projects])

  const openBlogPost = (project: SanityPortfolioType) => {
    setCurrentBlogPost(project)
  }

  const closeBlogPost = () => {
    setCurrentBlogPost(undefined)
  }

  const renderTag = (tag?: string) => {
    const noTags = <>No Tags Present</>

    if (!tag) return noTags

    switch (tag) {
      case 'Video':
        return <Fab variant="extended" color="primary" style={{width: 'max-content'}}><Grid container spacing={2}
                                                                                            alignItems="stretch">
          <Grid item><Typography variant="h5">📹</Typography></Grid>
          <Grid item><Typography variant="h5" style={{color: 'whitesmoke'}}>{tag}</Typography></Grid>
        </Grid></Fab>
      case 'Design':
        return <Fab variant="extended" color="primary" style={{width: 'max-content'}}><Grid container spacing={2}
                                                                                            alignItems="stretch">
          <Grid item><Typography variant="h5">🎨</Typography></Grid>
          <Grid item><Typography variant="h5" style={{color: 'whitesmoke'}}>{tag}</Typography></Grid>
        </Grid></Fab>
      case 'Code':
        return <Fab variant="extended" color="primary" style={{width: 'max-content'}}><Grid container spacing={2}
                                                                                            alignItems="stretch">
          <Grid item><Typography variant="h5">❮&nbsp;&nbsp;❯</Typography></Grid>
          <Grid item><Typography variant="h5" style={{color: 'whitesmoke'}}>{tag}</Typography></Grid>
        </Grid></Fab>
      default:
        return noTags
    }
  }

  return (
    <Grid container className={classes.root}>
      <Grid container item>
        <Typography variant="h3" className={classes.aboutMe}>
          Selected
          <Typography component="span" variant="h3" className={`${classes.aboutMe} ${classes.me}`} color="primary">
            Works
          </Typography>
        </Typography>
      </Grid>
      <Grid container item spacing={4} className={classes.projectsContainer}>
        {
          portfolioItems?.map((project:any, projectIndex:number) => (
            <Grid
              key={`portfolio-project-${projectIndex}`}
              item
              style={{position: 'relative'}}
              onClick={() => {
                openBlogPost(project)
              }}
              onMouseEnter={() => {
                setShowImage(
                  (state: boolean[]) =>
                    [...state.map((item, index) => index === projectIndex)],
                )
              }}
              onMouseLeave={() => setShowImage(
                (state: boolean[]) =>
                  [...state.fill(false)],
              )}
            >
              {
                !showImage[projectIndex] && <Grid container
                                                  item direction="column"
                                                  className={classes.project}
                                                  style={{
                                                    backgroundImage: `url("${urlFor(project.coverImage).size(340,340).url()}")`,
                                                    position: 'absolute',
                                                  }}>
                </Grid>
              }

              <Grid container item direction="column" className={classes.project} justify="flex-end">
                <Grid item><Typography className={classes.tags}>{project.tag}</Typography></Grid>
                <Grid item><Typography className={classes.title}>{project.title}</Typography></Grid>
              </Grid>
            </Grid>
          ))
        }
      </Grid>


      <Modal
        open={!!currentBlogPost}
        onClose={() => closeBlogPost()}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      ><Typography style={{color: theme.palette.text.secondary}}>
        <Grid container className={styles.paper} direction="column">
          <Grid container direction="column" item spacing={3}>
            <Grid container item wrap='nowrap' alignItems="center" justify="space-between" spacing={2}>
              <Grid container item wrap='nowrap' alignItems="stretch">
                <Grid item>
                  <Book className={styles.modalHeadlineIcon}/>
                </Grid>
                <Grid container item alignItems="flex-end">
                  <Typography variant="h3">{currentBlogPost?.name}</Typography>
                </Grid>
              </Grid>
              <Grid item>{renderTag(currentBlogPost?.tag)}</Grid>
            </Grid>
            <Grid item>
              <Grid item>
                <Typography variant="h4" color='primary'>{currentBlogPost?.subtitle}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item>
            {
              currentBlogPost?.body ? <BlockContent
                  blocks={currentBlogPost?.body}
                  projectId={sanityClient.config().projectId}
                  dataset={sanityClient.config().dataset}
                />:<></>
            }
          </Grid>
        </Grid>
      </Typography>
      </Modal>
    </Grid>
  )
}

export default SelectedWorksSection