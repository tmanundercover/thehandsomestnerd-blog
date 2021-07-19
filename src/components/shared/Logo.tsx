import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import theme from '../../common/Theme'
import {Grid, Link, Typography} from '@material-ui/core'
import logo from '../abReplica/common/assets/crown-logo.png'
import {useHistory} from 'react-router-dom'

export const useStyles = makeStyles((theme: Theme) => ({
  logoSection: {
    cursor: 'pointer'
  },
  logoText: {
    height: '80px',
    marginRight: "-18px"
  }
}))

export type LogoProps = {}

const Logo: FunctionComponent<LogoProps> = (props) => {
  const classes = useStyles(theme)
  const history = useHistory()

  return (
    <Link className={classes.logoSection} onClick={() => history.push('/')}>
      <Grid container wrap="nowrap" alignItems="center">
        <Grid item>
          <img src={logo} alt="Assembled Brands" className={classes.logoText}/>
        </Grid>
        <Grid item>
          <Typography variant="h3" style={{fontWeight: 800, letterSpacing: '-.13em'}}>Skincare</Typography>
        </Grid>
      </Grid>
    </Link>
  )
}

export default Logo