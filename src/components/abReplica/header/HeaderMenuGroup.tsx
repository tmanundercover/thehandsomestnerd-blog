import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'

import {Button, Link, Menu, Typography} from '@material-ui/core'
import {bindMenu, bindTrigger, usePopupState} from 'material-ui-popup-state/hooks'
import {ArrowDropDown} from '@material-ui/icons'
import {SanityMenuGroup} from '../cmsClient'

export const useStyles = makeStyles<Theme, AbMenuItemListProps>((theme: Theme) => ({
  footerLink: props => ({
    textDecoration: 'none',
    color: props.isLightTheme ? 'black' : '#FDF3EB',
    '&:hover': {
      textDecoration: 'none',
    },
    textTransform: 'capitalize',
  }),
  menuItem: {
    padding: theme.spacing(1, 4, 1),
  },
  menuTitle: {
    textTransform: 'capitalize',
  },
  menuTitleContained: {
    color: 'white',
  },
  popover: {
    boxShadow: 'none',
    borderLeft: `4px solid ${theme.palette.background.default}`,
    borderRadius: 0,
  },
  list: {
    padding: theme.spacing(1, 0),
  },
}))

export type AbMenuItemListProps = {
  menuGroup: SanityMenuGroup
  isLightTheme?: boolean
}

const HeaderMenuGroup: FunctionComponent<AbMenuItemListProps> = (props) => {
  const classes = useStyles(props)

  const popupState = usePopupState({variant: 'popover', popupId: props.menuGroup?.slug?.current})

  const isContained = (): boolean => {
    return props.menuGroup.slug?.current === 'apply-now'
  }
  return (
    <>
      {props.menuGroup.links?.length == 1 ?
        <Button href={props.menuGroup.links[0].url} variant={isContained() ? 'contained' : 'text'} color={isContained() ? 'primary' : 'secondary'}>
          <Link href={props.menuGroup.links[0].url} className={classes.footerLink}>
            {isContained() ?
              <Typography variant="button" className={classes.menuTitleContained}>
                {props.menuGroup.links[0].displayText}
              </Typography>
              :
              <Typography variant="body1" className={classes.menuTitle}>
                {props.menuGroup.links[0].displayText}
              </Typography>
            }
          </Link>
        </Button> :
        <div>
          <Button variant="text" {...bindTrigger(popupState)}>
            <Typography variant="body1" className={classes.menuTitle}>{props.menuGroup.displayText}</Typography>
            <ArrowDropDown/>
          </Button>
          <Menu {...bindMenu(popupState)}
                classes={{paper: classes.popover, list: classes.list}}
                getContentAnchorEl={null}
                anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                transformOrigin={{vertical: 'top', horizontal: 'left'}}
          >
            {props.menuGroup.links?.map((menuLink, index) => {
              return (<MenuItem key={index} className={classes.menuItem}>
                <Link href={menuLink.url} className={classes.footerLink}>{menuLink.displayText}</Link>
              </MenuItem>)
            })}
          </Menu>
        </div>

      }
    </>
  )
}

export default HeaderMenuGroup