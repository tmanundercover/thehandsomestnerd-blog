import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, useMediaQuery} from '@material-ui/core'
import HeroGradientWithText from '../shared/HeroGradientWithText'
import cmsStaticPagesClient, {SanityOurStoryPage} from '../cmsStaticPagesClient'
import BlockContentContainer from '../../BlockContentContainer'
import StoryStart from './StoryStart'
import BrandQuotes from './BrandQuotes'
import HowWeGrowBrands from '../shared/HowWeGrowBrands'
import abTheme from '../../common/Theme'
import HorizontalDivider from '../../../shared/HorizontalDivider'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(5),
    },
  },
  introductionContainer: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  lastSection: {
    marginBottom: theme.spacing(16),
  },
}))

const OurStory: FunctionComponent = () => {
  const classes = useStyles(abTheme)
  const mdUp = useMediaQuery(abTheme.breakpoints.up('md'))

  const [ourStoryPage, setOurStoryPage] = React.useState<SanityOurStoryPage>({})

  const getOurStoryPage = async (): Promise<void> => {
    setOurStoryPage(await cmsStaticPagesClient.fetchOurStoryPage())
  }

  React.useEffect(() => {
    document.title = `Assembled Brands | Our Story`
    getOurStoryPage().then()
  }, [])

  return (
    <Grid container direction="column" alignItems="center" spacing={mdUp ? 10 : 6} className={classes.root}>
      <Grid item xs={12} container>
        <HeroGradientWithText text={ourStoryPage.titleText} mainImage={ourStoryPage.mainImage}
                              gradient={ourStoryPage.gradient}/>
      </Grid>
      <Grid item xs={12} sm={10} container justify="center" alignItems="center"
            className={classes.introductionContainer}>
        {ourStoryPage?.introduction && <BlockContentContainer body={ourStoryPage?.introduction}/>}
      </Grid>
      <Grid item xs={12} sm={10} container>
        <HorizontalDivider/>
      </Grid>
      <Grid item xs={12} sm={10} container>
        <StoryStart title={ourStoryPage.storyStartTitle}
                    left1={ourStoryPage.storyStartLeft1}
                    left2={ourStoryPage.storyStartLeft2}
                    left3={ourStoryPage.storyStartLeft3}
                    rightImage={ourStoryPage.storyStartRightImage}
        />
      </Grid>
      <Grid item xs={12} sm={10} container>
        <HorizontalDivider/>
      </Grid>
      <Grid item xs={12} sm={8} container>
        <BrandQuotes title={ourStoryPage.brandQuotesTitle} quotes={ourStoryPage.brandQuotesList}/>
      </Grid>
      <Grid item xs={12} sm={10} container>
        <HorizontalDivider/>
      </Grid>
      <Grid item xs={12} sm={10} container>
        <HowWeGrowBrands title={ourStoryPage.howWeGrowBrandsTitle} content={ourStoryPage.howWeGrowBrandsContent}/>
      </Grid>
    </Grid>
  )
}

export default OurStory