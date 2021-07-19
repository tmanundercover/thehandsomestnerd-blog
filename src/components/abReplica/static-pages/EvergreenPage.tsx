import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import cmsStaticPagesClient, {SanityEvergreenPage, urlFor} from './cmsStaticPagesClient'
import {useHistory, useParams} from 'react-router-dom'
import {Grid, Typography} from '@material-ui/core'
import BlockContentLayoutContainer from '../BlockContentLayoutContainer'
import abTheme from '../common/Theme'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(5),
    },
  },
  heroImage: {
    backgroundRepeat: 'no-repeat',
    minHeight: '221px',
    zIndex: 1000,
    backgroundPosition: 'center',
  },
  heroImageContainer: {
    marginLeft: -1 * theme.spacing(4),
    width: `calc(100vw)`,
  },
  contentContainer: {
    marginLeft: -1 * theme.spacing(4),
  },
  preTitle: {
    color: abTheme.palette.accentText.blue.main,
  },
  preTitleContainer: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  title: {
    lineHeight: "72px",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: theme.typography.h3,
  },

}))


const EvergreenPage: FunctionComponent = () => {
  const classes = useStyles(abTheme)
  const history = useHistory()

  const {slug}: { slug: string } = useParams()
  const [pageData, setPageData] = React.useState<SanityEvergreenPage>({})

  const getEvergreenPageData = async (): Promise<void> => {
    let sanityEvergreenPage = await cmsStaticPagesClient.fetchEvergreenPage(slug)
    if (!sanityEvergreenPage) {
      history.push(`/blog/${slug}`)
    }
    setPageData(sanityEvergreenPage)
  }

  React.useEffect(() => {
    getEvergreenPageData().then()
  }, [])

  React.useEffect(()=>{
      document.title = `Assembled Brands | ${pageData.title}`
  },[pageData])

  return (
    <Grid container item direction="column" alignItems="center" className={classes.root}>
      {
        pageData.mainImage &&
        <Grid container item alignItems="center" justify="center" className={classes.heroImageContainer}>
            <Grid container item xs={12} style={{backgroundImage: `url(${urlFor(pageData.mainImage).url() ?? ''})`}}
                  className={classes.heroImage}/>
        </Grid>
      }
      <Grid container direction="column" item xs={12} md={8} className={classes.contentContainer}>
        {
          pageData.mainImage &&
          <Grid item className={classes.preTitleContainer}>
              <Typography variant="overline" className={classes.preTitle}>The Complete Guide</Typography>
          </Grid>
        }
        <Grid item>
          <Typography variant="h2" className={classes.title}>{pageData.title}</Typography>
        </Grid>
        <Grid container item direction="column">
          <BlockContentLayoutContainer content={pageData?.pageContent}/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default EvergreenPage