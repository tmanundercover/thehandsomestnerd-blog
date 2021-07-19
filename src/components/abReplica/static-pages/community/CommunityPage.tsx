import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, useMediaQuery} from '@material-ui/core'
import HeroGradientWithText from '../shared/HeroGradientWithText'
import cmsStaticPagesClient, {SanityCommunityPage} from '../cmsStaticPagesClient'
import BlockContentContainer from '../../BlockContentContainer'
import HowWeGrowBrands from '../shared/HowWeGrowBrands'
import PortfolioCompanies from '../shared/PortfolioCompanies'
import HorizontalDivider from '../../../shared/HorizontalDivider'
import abTheme from '../../common/Theme'

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

const Community: FunctionComponent = () => {
  const classes = useStyles(abTheme)
  const mdUp = useMediaQuery(abTheme.breakpoints.up('md'))

  const [communityPage, setCommunityPage] = React.useState<SanityCommunityPage>({})

  const getCommunityPage = async (): Promise<void> => {
    setCommunityPage(await cmsStaticPagesClient.fetchCommunityPage())
  }

  React.useEffect(() => {
    document.title = `Assembled Brands | Community`
    getCommunityPage().then()
  }, [])

  return (
    communityPage ? <Grid container direction="column" alignItems="center" spacing={mdUp ? 10 : 6} className={classes.root}>
      <Grid item xs={12} container>
        <HeroGradientWithText text={communityPage.titleText} mainImage={communityPage.mainImage}
                              gradient={communityPage.gradient}/>
      </Grid>
      <Grid item xs={12} sm={10} container justify="center" alignItems="center"
            className={classes.introductionContainer}>
        {communityPage?.introduction && <BlockContentContainer body={communityPage?.introduction}/>}
      </Grid>
      <Grid item xs={12} sm={10} container>
        <HorizontalDivider/>
      </Grid>
      <Grid item xs={12} sm={10} container>
        <HowWeGrowBrands title={communityPage.howWeGrowBrandsTitle} content={communityPage.howWeGrowBrandsContent}/>
      </Grid>
      <Grid item xs={12} sm={10} container>
        <HorizontalDivider/>
      </Grid>
      <Grid item xs={12} sm={10} container>
        <PortfolioCompanies weWorkWithSection={communityPage?.weWorkWithSection} />
      </Grid>
      <Grid item xs={12} sm={10} container justify="center" alignItems="center"
            className={classes.introductionContainer}>
        {communityPage?.callToAction && <BlockContentContainer body={communityPage?.callToAction}/>}
      </Grid>
    </Grid>:<></>
  )
}

export default Community