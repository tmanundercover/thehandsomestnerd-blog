import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import HeaderMenuContainer from './HeaderMenuContainer'
import {useHistory} from 'react-router-dom'
import abTheme from '../common/Theme'
import Logo from '../../shared/Logo'

export const useHeaderStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '84px',
  },
  logoSection: {
    cursor: 'pointer',
  },
  logoText: {
    height: '36px',
    marginLeft: theme.spacing(1.5),
  },
}))

const Header: FunctionComponent = () => {
  const classes = useHeaderStyles(abTheme)

  return (
    <Grid container item xs={12} justifyContent={'space-between'} alignItems={'stretch'} className={classes.root}>
      <Grid container item xs={10} md={6} alignItems='center'>
        <Logo/>
      </Grid>
      <Grid container item xs={2} md={3} alignItems="center" justify="flex-end">
        <HeaderMenuContainer/>
      </Grid>
    </Grid>
  )
}

export default Header