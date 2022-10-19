import React, { FunctionComponent } from 'react'
import { Button, Card, Grid, Typography } from '@material-ui/core'
import FooterMenuGroup from './FooterMenuGroup'
import { makeStyles, Theme } from '@material-ui/core/styles'
import AndaTheme from '../../../theme/aft-theme/AftTheme'
import { SanityHomePage, urlFor } from '../static-pages/cmsStaticPagesClient'
import { SanityAftHomePage } from '../../layout/AftMarketing'
import { Link } from 'react-router-dom'
import cmsClient from "../cmsClient";
import {SanityTransformHwHomePage} from "../../../common/sanityIo/Types";
import {SanityMenuContainer, SanityMenuGroup} from "../../../sanity/Menu";


export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: '1360px',
    height: '679px',
    marginBottom: '32px',
    padding: theme.spacing(10, 5)
  }
}))


interface IProps {
  menuContainerSlug?: string
  homePage?: SanityAftHomePage | SanityTransformHwHomePage
}

const FooterMenuContainer: FunctionComponent<IProps> = (props: IProps) => {
  const classes = useStyles(AndaTheme)

  const [menu, setMenu] = React.useState<SanityMenuContainer>()

  const getMenuData = (): Promise<any> => {
    return cmsClient.fetchLandingPageFooterMenu(props.menuContainerSlug)
  }

  React.useEffect(() => {
    getMenuData().then((data) => setMenu(data))
  }, [])

  return (
    <Grid container item spacing={5} justifyContent='center'>
      <Card className={classes.root}>
        <Grid container direction='column'>
          <Grid item container style={{marginBottom: '80px'}}>
            {menu?.logoImageSrc && <img alt={menu?.logoImageAltText} src={urlFor(menu.logoImageSrc).url() ?? ''}/>}
          </Grid>
          <Grid container item>
            <Grid container item xs={8}>
              {
                menu?.menuItems?.map((menuGroup: SanityMenuGroup, index: number) => {
                  return (
                    <Grid key={index} item>
                      <FooterMenuGroup menuGroup={menuGroup}/>
                    </Grid>
                  )
                })
              }
            </Grid>
            <Grid item container xs={4}>
              <Grid container>
                <Grid container item spacing={9}>
                  <Grid item>
                    <img src={urlFor(props.homePage?.facebookIconSrc ?? '').url() ?? ''} alt={'Anda Facebook'}/>
                  </Grid>
                  <Grid item>
                    <img src={urlFor(props.homePage?.twitterIconSrc ?? '').url() ?? ''} alt='Anda Twitter'/>

                  </Grid>
                  <Grid item>
                    <Button href={'http://instagram.com/' + props.homePage?.instagram}>
                      <img
                        src={urlFor(props.homePage?.instagramIconSrc ?? '').url() ?? ''} alt='Anda Instagram'/></Button>

                  </Grid>
                </Grid>
                <Grid container item spacing={2}>
                  <Grid item>
                    <Button href={props.homePage?.androidPlayStoreLink ?? ''}>
                      <img
                        src={urlFor(props.homePage?.androidPlayStoreIconSrc ?? '').url() ?? ''}
                        alt='Anda on android link'/></Button>
                  </Grid>
                  <Grid item>
                    <Link to={props.homePage?.appStoreLink ?? ''}>
                      <img
                        src={urlFor(props.homePage?.appStoreIconSrc ?? '').url() ?? ''}
                        alt='Anda on android link'/></Link>
                  </Grid>
                </Grid>
                <Grid item container>
                    <img
                      width={'325px'}
                      height={'70px'}
                    src={urlFor(props.homePage?.fdicImage ?? '').height(70).url() ?? ''}
                    alt='FDIC logo'/>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Card>
    </Grid>
  )
}

export default FooterMenuContainer