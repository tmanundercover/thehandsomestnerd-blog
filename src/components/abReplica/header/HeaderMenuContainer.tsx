import React, {FunctionComponent} from 'react'
import {Fade, Grid, Hidden, IconButton, Link, Modal, Typography} from '@material-ui/core'
import HeaderMenuGroup from './HeaderMenuGroup'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import {makeStyles, Theme} from '@material-ui/core/styles'
import Backdrop from '@material-ui/core/Backdrop'
import cmsClient, {SanityMenuContainer, SanityMenuGroup} from '../cmsClient'
import abTheme from '../common/Theme'


const useStyles = makeStyles((theme: Theme) => ({
  headerModal: {
    backgroundColor: theme.palette.background.paper,
    height: '100%',
    padding: theme.spacing(3),
  },
  hamburgerMenuItem: {
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0.5px',
    '& a': {
      '&:hover': {
        textDecoration: 'none',
      },
      color: '#3D3D3D',
    },
  },
  hamburgerMenuLink: {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0.1px',
    marginLeft: theme.spacing(3),
    '& a': {
      '&:hover': {
        textDecoration: 'none',
      },
      color: '#3D3D3D',
    },
  },
}))

const HeaderMenuContainer: FunctionComponent = () => {

  const classes = useStyles(abTheme)

  const [menu, setMenu] = React.useState<SanityMenuContainer>()
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false)

  const getMenuData = async (): Promise<void> => {
    const data = await cmsClient.fetchLandingPageHeaderMenu()
    setMenu(data)
  }
  React.useEffect(() => {
    getMenuData().then()
  }, [])


  const onMenuClick = (): void => {
    setMenuOpen(true)
  }

  const onMenuCloseClick = (): void => {
    setMenuOpen(false)
  }

  return (
    <Grid container justify="flex-end">
      <Hidden smDown>
        <Grid container item alignItems="center" justify="flex-end" spacing={6}>
          {
            menu?.menuItems?.map((menuGroup: SanityMenuGroup, index) => {
              return (
                <Grid key={index} item>
                  <HeaderMenuGroup menuGroup={menuGroup} isLightTheme/>
                </Grid>
              )
            })
          }
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid container item alignItems="center" justify="flex-end">
          <IconButton aria-label="menu" color="secondary" onClick={onMenuClick}>
            <MenuIcon/>
          </IconButton>
        </Grid>
      </Hidden>

      <Modal open={menuOpen}
             onClose={onMenuCloseClick}
             BackdropComponent={Backdrop}
             closeAfterTransition
             BackdropProps={{
               timeout: 500,
             }}>
        <Fade in={menuOpen}>
          <Grid container direction="column" className={classes.headerModal}>
            <Grid container item justify="flex-end">
              <IconButton aria-label="close-menu" color="secondary" onClick={onMenuCloseClick}>
                <CloseIcon/>
              </IconButton>
            </Grid>
            <Grid container item direction="column" spacing={2}>
              {
                menu?.menuItems?.map((menuItem: SanityMenuGroup, index: number) => {
                  let linkCount = menuItem?.links ? menuItem.links.length : 0
                  return <Grid container item key={index} direction="column" spacing={2}>
                    {
                      linkCount > 1 &&
                      <Grid item>
                        <Typography variant="body1" className={classes.hamburgerMenuItem}>
                          {menuItem.displayText}
                        </Typography>
                      </Grid>
                    }
                    {
                      menuItem?.links?.map((link, index) => {
                        if (link) {
                          return <Grid item key={index}>
                            <Typography variant="subtitle2"
                                        className={linkCount > 1 ? classes.hamburgerMenuLink : classes.hamburgerMenuItem}>
                              <Link key={link.displayText} href={link.url}>{link.displayText}</Link>
                            </Typography>
                          </Grid>
                        }

                      })
                    }
                  </Grid>
                })
              }
            </Grid>
          </Grid>
        </Fade>
      </Modal>
    </Grid>
  )
}

export default HeaderMenuContainer