import {CssBaseline, Grid, makeStyles, MuiThemeProvider, Theme} from '@material-ui/core'
import React, {FunctionComponent} from 'react'
import theme from '../../common/Theme'
import Header from './sanity/header/Header'
import sanityClient from '../../sanityClient'
import BlockContentLayoutContainer from '../BlockContentLayoutContainer'
import AndaTheme from '../../theme/aft-theme/AftTheme'
import {useParams} from 'react-router-dom'
import MetaTagsComponent from '../aft-marketing/MetaTags'
import cmsClient from '../abReplica/cmsClient'
import purpleDiamond from './purpleDiamond.png'
import Footer from '../abReplica/footer/Footer'
import {SanityImageAsset} from "@sanity/asset-utils";


export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100vw',

    backgroundImage: `url('${purpleDiamond}')`,
    backgroundRepeat: 'repeat',
    backgroundColor: '#F3FFFC'
  }
}))


export type SanityAftHomePage = {
  title?: string
  description?: string
  imgSrc?: SanityImageAsset
  slug?: any
  pageContent?: any
  structuredData?: any
  facebook?: string
  facebookIconSrc?: SanityImageAsset
  twitter?: string
  twitterIconSrc?: SanityImageAsset
  instagram?: string
  instagramIconSrc?: SanityImageAsset
  androidPlayStoreLink?: string
  androidPlayStoreIconSrc?: string
  appStoreLink?: string
  appStoreIconSrc?: string
  fdicDisclaimer?:string
  fdicImage?:string
}

export type AppLayoutProps = {}

const AftMarketing: FunctionComponent<AppLayoutProps> = (props) => {
  const classes = useStyles(theme)
  const [homePage, setHomePage] = React.useState<SanityAftHomePage|undefined>()

  const urlParams:{pageSlug:string} = useParams()

  React.useEffect(() => {
    const pageSlug = urlParams.pageSlug
    if(pageSlug){
      sanityClient
        .fetch(
          `*[slug.current == $pageSlug]{
          title,
          slug,
          description,
          metaImage,
          pageContent,
          structuredData,
          facebook,
          facebookIconSrc{
            asset->{
              _id,
              url,
              altText
             }
          },
          twitter,
          twitterIconSrc{
            asset->{
              _id,
              url,
              altText
             }
          },
          instagram,
          instagramIconSrc{
            asset->{
              _id,
              url,
              altText
             }
          },
          androidPlayStoreLink,
          androidPlayStoreIconSrc{
            asset->{
              _id,
              url,
              altText
             }
          },
          appStoreLink,
          appStoreIconSrc{
            asset->{
              _id,
              url,
              altText
             }
          },
          fdicImage{
            asset->{
              _id,
              url,
              altText
             }
          },
          fdicDisclaimer
       }`,{pageSlug})
        .then((data: SanityAftHomePage[]) => {
          console.log('aft homepage fetched', data[0])

          setHomePage(data[0])
        })
        .catch(console.error)
    }
  }, [])

  const [realizedContent, setRealizedContent] = React.useState<any[]>([])


  React.useEffect(() => {

    // These Content sections are references and must be retrieved from Sanity
    homePage?.pageContent?.content?.map && Promise.all(homePage?.pageContent?.content.map((contentBlock: any) => {
      return cmsClient.fetchRef(contentBlock).then((response) => {
        return response
      })
    })).then(contentRealized => {
      setRealizedContent(contentRealized)
    })
  }, [homePage])

  return (
    <MuiThemeProvider theme={AndaTheme}>
      <CssBaseline/>
      <MetaTagsComponent structuredData={homePage?.structuredData[0]} title={homePage?.title ?? ''}
                         description={homePage?.description ?? ''} imgSrc={homePage?.imgSrc}/>
      <Grid container direction='column' className={classes.root}>
        <Grid item>
          <Header menuSlug='aft-header'/>
        </Grid>
        <Grid item style={{marginBottom: '80px'}}>
          <BlockContentLayoutContainer
            content={realizedContent}/>
        </Grid>
        <Grid item>
          <Footer footerMenuSlug='aft-footer' homePage={homePage}/>
        </Grid>
      </Grid>
    </MuiThemeProvider>

  )
}

export default AftMarketing