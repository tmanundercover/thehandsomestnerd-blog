import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'

import {Grid, Link, Typography} from '@material-ui/core'
import {SanityMenuGroup, SanityMenuItem} from '../cmsClient'
import abTheme from '../common/Theme'

export const useStyles = makeStyles((theme: Theme) => ({
  root:{
    marginRight: theme.spacing(11)
  },
  footerLink: {
    marginBottom: '8px',
    textDecoration: 'none',
    color: '#FDF3EB',
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
    color: '#FDF3EB',
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
  menuGroup: SanityMenuGroup
}

const FooterMenuGroup: FunctionComponent<LandingPagesFooterMenuGroupProps> = ({menuGroup}) => {
  const classes = useStyles(abTheme)

  return (
    <Grid container direction="column" spacing={2} className={classes.root}>
      <Grid container item>
        <Typography variant="overline" className={classes.menuTitle}>{menuGroup.displayText}</Typography>
      </Grid>
      {menuGroup.links?.map((menuLink: SanityMenuItem, index) => {
        return (
          <Grid key={index} item>
            <Link href={menuLink.url} className={classes.footerLink}>
              <Typography variant="subtitle2">
                {menuLink.displayText}
              </Typography>
            </Link>
          </Grid>
        )
      })}
    </Grid>

  )
}

export default FooterMenuGroup