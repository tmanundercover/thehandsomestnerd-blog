import {Grid, useMediaQuery} from '@material-ui/core'
import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import Header from './header/Header'
import Footer from './footer/Footer'
import abTheme from './common/Theme'
import theme from './common/Theme'
import HomePageHeroImage from './static-pages/shared/HomePageHeroImage'
import BlockContentContainer from './BlockContentContainer'
import SpecializationsMenu from './static-pages/shared/SpecializationsMenu'
import HorizontalDivider from '../shared/HorizontalDivider'
import PortfolioCompanies from './static-pages/shared/PortfolioCompanies'
import ProcessSteps from './static-pages/shared/processSteps/ProcessSteps'
import SolutionsSection from './static-pages/shared/SolutionsSection'
import cmsStaticPagesClient, {SanityHomePage} from './static-pages/cmsStaticPagesClient'

import Aos from 'aos'
import 'aos/dist/aos.css'
import PointOfInterest from '../derm-sections/PointOfInterest'
import ModernServiceSection from '../derm-sections/ModernServiceSection'
// import ModernServiceSection from '../derm-sections/ModernServiceSection'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 'calc(100vw)'
  },
  sectionContainer: {
    marginTop: '84px',
    padding: theme.spacing(0, 4, 0, 3)
  },
  headerSectionContainer: {
    backgroundColor: theme.palette.background.paper,
    position: 'fixed',
    zIndex: 1001,
    left: 0,
    padding: theme.spacing(0, 4, 0, 3)
  },
  contentContainer: {
    backgroundColor: theme.palette.background.paper
  },
  landingPageContainer: {
    overflow: 'hidden'
  },
  appBar: {
    backgroundColor: theme.palette.background.paper
  },
  abLogo: {
    height: '32px',
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(4)
  },
  homePageRoot: {
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(5)
    }
  },
  introductionContainer: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  }
}))

const MainLayout: FunctionComponent = () => {
  const classes = useStyles(abTheme)
  const mdUp = useMediaQuery(theme.breakpoints.up('md'))

  const [homePage, setHomePage] = React.useState<SanityHomePage>({})

  const getHomePage = async (): Promise<void> => {
    setHomePage(await cmsStaticPagesClient.fetchHomePage())
  }

  React.useEffect(() => {
    document.title = `Assembled Brands | Home`
    Aos.init({duration: 2300})
    getHomePage().then()
  }, [])
  return (
    <Grid item>
      <Grid container direction="column" className={classes.root}>
        <Grid container item direction="column" alignItems="center" className={classes.contentContainer}>
          <Grid container item className={classes.headerSectionContainer}>
            <Header/>
          </Grid>
          <Grid container direction="column" item className={classes.sectionContainer} alignItems="center"
                justify="center">
            <Grid container item direction="column" alignItems="center" spacing={6}
                  className={classes.homePageRoot}>
              <Grid item xs={12} container>
                <HomePageHeroImage heroImage={homePage?.heroImage}/>
              </Grid>
              <Grid item xs={12} sm={10}>
                <Grid container direction="column" spacing={4}>
                  <Grid item xs={12} container justify="center" alignItems="center"
                        className={classes.introductionContainer} data-aos="fade-down">
                    {homePage?.introduction && <BlockContentContainer body={homePage?.introduction}/>}
                  </Grid>
                  <Grid item xs={12} container>
                    <SpecializationsMenu menuGroup={homePage?.specializationsMenuGroup}/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={10} container>
                <HorizontalDivider/>
              </Grid>
              <Grid item xs={12} sm={10} data-aos="flip-left" id="portfolio-companies-anchor">
                <PortfolioCompanies anchor="portfolio-companies-anchor"
                                    weWorkWithSection={homePage?.weWorkWithSection}/>
              </Grid>
              <Grid item xs={12} sm={10} container>
                <HorizontalDivider/>
              </Grid>
              <Grid item xs={12} sm={10}>
                <ProcessSteps anchor="process-steps-anchor"/>
              </Grid>
              <Grid item xs={12} sm={10} container>
                <HorizontalDivider/>
              </Grid>
              <Grid item xs={12} sm={10}>
                <SolutionsSection anchor="solutions-anchor" sectionData={homePage?.solutions}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="column" style={{backgroundColor: 'black'}}>
          <PointOfInterest/>
          <ModernServiceSection/>
        </Grid>
        <Grid container item>
          <Footer/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MainLayout