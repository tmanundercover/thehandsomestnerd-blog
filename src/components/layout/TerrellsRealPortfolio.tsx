import {Grid, makeStyles, MuiThemeProvider, Theme} from '@material-ui/core'
import React, {FunctionComponent} from 'react'
import theme from '../../common/Theme'
import Header from './sanity/header/Header'
import sanityClient from '../../sanityClient'
import {SanityImageAssetDocument} from '@sanity/client'
import BlockContentLayoutContainer from '../BlockContentLayoutContainer'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100vw',
  },
}))


type SanityHomePage = {
  title?: string,
  slug?: any,
  clientName?: string,
  occupation?: string,
  heroImage?: any,
  aboutMeBody?: any,
  specialties?: string[],
  portfolioItems?: any[],
  skills?: any[],
  skillsHeading?: string,
  skillsText?: any,
  freelancePrompt?: string,
  address?: string,
  phone?: string,
  email?: string,
  pageContent?: any,
  facebook?: string,
  twitter?: string,
  linkedIn?: string,
  youtube?: string,
  profileImage?: SanityImageAssetDocument
}

export type AppLayoutProps = {}

const TerrellsPortfolio: FunctionComponent<AppLayoutProps> = (props) => {
  const classes = useStyles(theme)
  const [homePage, setHomePage] = React.useState<SanityHomePage>({})

  React.useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == 'terrell-s-portfolio']{
          title,
          slug,
          clientName,
          occupation,
          heroImage,
          aboutMeBody,
          specialties,
          skillsText,
          skillsHeading,
          skills,
          address,
          phone,
          email,
          facebook,
          twitter,
          youtube,
          linkedIn,
          freelancePrompt,
          profileImage,
          pageContent,
          "portfolioItems":portfolioItems[]->{title, subtitle, name, tag, source, coverImage, body, categories[]->{title, description}}
       }`,
      )
      .then((data: SanityHomePage[]) => {
        console.log(data[0])
        setHomePage(data[0])
      })
      .catch(console.error)
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <Header/>
      </Grid>
      <Grid item>
        <BlockContentLayoutContainer
          content={homePage?.pageContent}/>
      </Grid>
    </Grid>
</MuiThemeProvider>

)
}

export default TerrellsPortfolio