import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'

import {Grid, Link, Typography} from '@material-ui/core'
import {SanityMenuGroup, SanityMenuItem} from '../cmsClient'
import abTheme from '../common/Theme'
import logo from '../common/assets/crown-logo.png'
import { SanityHomePage } from '../static-pages/cmsStaticPagesClient'

export const useStyles = makeStyles((theme: Theme) => ({
  root:{
    marginRight: theme.spacing(11)
  },
  footerLink: {
    marginBottom: '8px',
    textDecoration: 'none',
    // color: '#FDF3EB',
    '&:hover': {
      textDecoration: 'none',
    },
    textTransform: 'capitalize',
  },
  menuItem: {
    paddingLeft: '32px',
    paddingRight: '32px',
  },
  menuTitle: {
    // color: '#FDF3EB',
    marginBottom: theme.spacing(1),
  },
  popover: {
    boxShadow: 'none',
    borderLeft: `4px solid ${theme.palette.background.default}`,
    borderRadius: 0,
  },
  list: {
    padding: 0,
  },
}))

export type LandingPagesFooterMenuGroupProps = {
  menuGroup: SanityMenuGroup,
}

const FooterMenuGroup: FunctionComponent<LandingPagesFooterMenuGroupProps> = ({menuGroup}) => {
  const classes = useStyles(abTheme)

  return (
    <Grid container direction="column" spacing={2} className={classes.root}>
      <Grid container item>
        <Typography color='textSecondary' variant="body2" className={classes.menuTitle}>{menuGroup.menuGroupTitle}</Typography>
      </Grid>
      <Grid item container >
        <Grid container item xs={8} direction='column' spacing={2}>
          {menuGroup.links?.map((menuLink: SanityMenuItem, index) => {
          return (
            <Grid key={index} item style={{borderLeft:"1px solid #383838", paddingLeft:'8px', marginLeft: '8px'}}>
              <Link href={menuLink.url} className={classes.footerLink}>
                <Typography variant="body1" color='textSecondary'>
                  {menuLink.displayText}
                </Typography>
              </Link>
            </Grid>
          )
        })}</Grid>

      </Grid>
    </Grid>

  )
}

export default FooterMenuGroup